from django.db import models

# Create your models here.
class Algorithm(models.Model):
    # 알고리즘 이름을 저장할 클래스
    name = models.CharField(max_length=40)
    korname = models.CharField(max_length=40)
    chartid = models.CharField(max_length=100)
    algorithm_type = models.CharField(max_length=40)
    introduction = models.TextField()

    def __str__(self): # 이 부분 추가
        return self.name
