import time
from django import template

register = template.Library()

@register.filter
def get_twitter_date(created_at):
	return time.strftime('%b %d, %Y', time.strptime(created_at,'%a %b %d %H:%M:%S +0000 %Y'))
	