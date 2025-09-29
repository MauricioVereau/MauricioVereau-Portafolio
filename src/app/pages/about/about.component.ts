import { Component } from '@angular/core';
import { faNetworkWired, faTools } from '@fortawesome/free-solid-svg-icons';
import { TechCategory } from '../../components/tech-icons/tech-icons.component';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  aboutData: any = {};

  iconTech = faTools;
  iconProject = faNetworkWired;

  techCategories: TechCategory[] = [
    {
      title: 'Lenguajes de Programación',
      items: [
        { name: 'JavaScript', icon: 'assets/img/tech-icons/JavaScript.svg' },
        { name: 'C#', icon: 'assets/img/tech-icons/csharp.svg' },
        { name: 'Java', icon: 'assets/img/tech-icons/java.svg' },
        { name: 'Python', icon: 'assets/img/tech-icons/python.svg' },
        { name: 'HTML5', icon: 'assets/img/tech-icons/HTML5.svg' },
        { name: 'CSS3', icon: 'assets/img/tech-icons/CSS3.svg' },
        { name: 'TypeScript', icon: 'assets/img/tech-icons/TypeScript.svg' },
      ]
    },
    {
      title: 'Frameworks y Librerías',
      items: [
        { name: 'Angular', icon: 'assets/img/tech-icons/Angular.svg' },
        { name: 'Spring', icon: 'assets/img/tech-icons/Spring.svg' },
        { name: 'Bootstrap', icon: 'assets/img/tech-icons/Bootstrap.svg' },
        { name: 'Tailwind', icon: 'assets/img/tech-icons/TailwindCSS.svg' },
        { name: 'Swagger', icon: 'assets/img/tech-icons/Swagger.svg' },
        { name: '.NET Core', icon: 'assets/img/tech-icons/NETcore.svg' },
      ]
    },

    {
      title: 'Herramientas',
      items: [
        { name: 'Git', icon: 'assets/img/tech-icons/Git.svg' },
        { name: 'Maven', icon: 'assets/img/tech-icons/ApacheMaven.svg' },
        { name: 'Postman', icon: 'assets/img/tech-icons/Postman.svg' },
        { name: 'Linux', icon: 'assets/img/tech-icons/Linux.svg' },
        { name: 'Jira', icon: 'assets/img/tech-icons/Jira.svg' },
        { name: 'Cloudflare', icon: 'assets/img/tech-icons/Cloudflare.svg' },
      ]
    },
    {
      title: 'Bases de Datos',
      items: [
        { name: 'MySQL', icon: 'assets/img/tech-icons/MySQL.svg' },
        { name: 'MongoDB', icon: 'assets/img/tech-icons/MongoDB.svg' },
        { name: 'SQL Server', icon: 'assets/img/tech-icons/MicrosoftSQLServer.svg' },
      ]
    },
    {
      title: 'IDEs',
      items: [
        { name: 'PyCharm', icon: 'assets/img/tech-icons/PyCharm.svg' },
        { name: 'VS Code', icon: 'assets/img/tech-icons/VisualStudioCode.svg' },
        { name: 'Visual Studio', icon: 'assets/img/tech-icons/VisualStudio.svg' },
        { name: 'Eclipse', icon: 'assets/img/tech-icons/Eclipse IDE.svg' },
      ]
    }
  ];


  projects = [
    {
      "id": 1,
      "title": "Hoteles Italia",
      "image": "https://api.microlink.io/?url=https://hoteles-italia.pages.dev/&screenshot=true&meta=false&embed=screenshot.url",
      "technologies": [
        "Angular 17",
        "Tailwind",
        "TS",
      ],
      "demo": "https://hoteles-italia.pages.dev/",
      "repo": "https://github.com/MauricioVereau/hoteles-italia/"
    },
    {
      "id": 2,
      "title": "Blog Coffee",
      "image": "https://api.microlink.io/?url=https://blogcafe-mauriciovereau.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
      "technologies": [
        "Html5",
        "Css3",
        "JS",
      ],
      "demo": "https://blogcafe-mauriciovereau.netlify.app/",
      "repo": ""
    },
    {
      "id": 3,
      "title": "Web Bussiness",
      "image": "https://api.microlink.io/?url=https://bienesraices-mauriciovereau.netlify.app/&screenshot=true&meta=false&embed=screenshot.url",
      "technologies": [
        "Html5",
        "Css3",
        "JS",
      ],
      "demo": "https://bienesraices-mauriciovereau.netlify.app/",
      "repo": ""
    }, {
      "id": 4,
      "title": "Angular Pipes",
      "image": "https://api.microlink.io/?url=https://mauriciovereau.github.io/PipesAngular/&screenshot=true&meta=false&embed=screenshot.url",
      "technologies": [
        "Angular v17",
      ],
      "demo": "https://mauriciovereau.github.io/PipesAngular/",
      "repo": "https://github.com/MauricioVereau/PipesAngular"
    }, {
      "id": 5,
      "title": "Api Countries",
      "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      "technologies": [
        "Angular v17",
        "Api"
      ],
      "demo": "https://mauriciovereau.github.io/AppPaises/",
      "repo": "https://github.com/MauricioVereau/AppPaises"
    }, {
      "id": 6,
      "title": "ApiEcommerce Demo",
      "image": "https://raw.githubusercontent.com/MauricioVereau/Curso-.Net8-Docker/main/wwwroot/Img/Api-Run-Swagger.png",
      "technologies": [
        "Api",
        ".Net Core 8",
        "Docker"
      ],
      "demo": "",
      "repo": "https://github.com/MauricioVereau/Curso-.Net8-Docker"
    }


  ]

  constructor(public translate: TranslateService) { }


  ngOnInit() {
    this.loadAboutTexts();
    this.translate.currentLang$.subscribe(() => this.loadAboutTexts());
  }

  loadAboutTexts() {
    this.aboutData = this.translate.getTranslation('about') || {};
  }


}
