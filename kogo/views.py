from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from twython import Twython
from django.conf import settings


def home(request):
  twitter = Twython(settings.APP_KEY, access_token=settings.ACCESS_TOKEN)
  user_timeline = twitter.get_user_timeline(screen_name='KogoAds', count=3)
  tweets = []
  for tweet in user_timeline:
    tweets.append(tweet)
  return render(request, 'companies.html', { "tweets": tweets })