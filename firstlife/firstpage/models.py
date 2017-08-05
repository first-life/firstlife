from django.db import models

# Create your models here.
class Algorithm(models.Model):
    # 알고리즘 이름을 저장할 클래스
    name = models.CharField(max_length=40)
    korname = models.CharField(max_length=40)
    chartid = models.CharField(max_length=100)
    algorithm_type = models.CharField(max_length=40)
    introduction = models.TextField()
    datasetintro = models.TextField()
    
    def __str__(self):
        return self.name

class Recommend(models.Model):
    algorithm = models.ForeignKey(Algorithm)
    address = models.CharField(max_length=100)
    content = models.TextField()

    def __str__(self):
        return self.address
