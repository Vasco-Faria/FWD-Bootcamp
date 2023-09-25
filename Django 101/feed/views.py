from typing import Any
from django import http
from django.shortcuts import render
from .models import Post
from .forms import PostForm


# Create your views here.

from django.views.generic import TemplateView, DetailView,FormView
from django.contrib import messages

class HomePageView(TemplateView):
    template_name = "home.html"
    
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts']=Post.objects.all().order_by('text')
        return context
    
    
class PostDetailView(DetailView):
    template_name="detail.html"
    model = Post
    
    
class AddPostView(FormView):
    template_name="new_post.html"
    form_class = PostForm
    success_url = '/'
    
    def dispatch(self, request, *args, **kwargs):
        self.request=request
        return super().dispatch(request, *args, **kwargs)
    
    def form_valid(self, form):
        print("This was valid!!")
        new_object = Post.objects.create(
            text=form.cleaned_data['text'],
            image=form.cleaned_data['image']
        )
        messages.add_message(self.request, messages.SUCCESS,'Your post was sucessful')
        return super().form_valid(form)