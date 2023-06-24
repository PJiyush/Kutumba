from django.urls import path, include
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.home_view, name='home'),
    path('logout/', views.logout_view, name='logout')
]