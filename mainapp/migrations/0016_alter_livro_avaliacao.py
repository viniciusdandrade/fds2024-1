# Generated by Django 5.0.4 on 2024-05-01 21:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0015_remove_bookhistory_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='livro',
            name='avaliacao',
            field=models.IntegerField(blank=True, choices=[(0, '0 Estrelas'), (1, '1 Estrela'), (2, '2 Estrelas'), (3, '3 Estrelas'), (4, '4 Estrelas'), (5, '5 Estrelas')], null=True),
        ),
    ]
