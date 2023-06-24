from django.shortcuts import render, redirect
from django.contrib.auth import logout

# Create your views here.
def home_view(request):
    return render(request, 'main/home.html')

def logout_view(request):
    logout(request)
    return redirect('main:home')