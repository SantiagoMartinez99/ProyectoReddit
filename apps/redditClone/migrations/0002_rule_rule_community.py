# Generated by Django 3.2.16 on 2023-11-10 18:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('redditClone', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='rule',
            name='rule_community',
            field=models.ForeignKey(default=0, on_delete=django.db.models.deletion.CASCADE, to='redditClone.community', verbose_name='rule_community'),
        ),
    ]