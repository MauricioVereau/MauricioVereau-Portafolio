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
      "title": "Portafolio Personal",
      "image": "assets/images/portfolio/portfolio.webp",
      "technologies": [
        "Angular v17",
        "TypeScript",
        "RxJS",
        "Tailwind CSS"
      ],
      "demo": "link",
      "repo": "link repo"
    },
    {
      "id": 2,
      "title": "Portafolio Personal",
      "image": "assets/images/portfolio/portfolio.webp",
      "technologies": [
        "Angular v17",
        "TypeScript",
        "RxJS",
        "Tailwind CSS"
      ],
      "demo": "link",
      "repo": "link 2"
    },{
      "id": 3,
      "title": "Portafolio Personal",
      "image": "assets/images/portfolio/portfolio.webp",
      "technologies": [
        "Angular v17",
        "TypeScript",
        "RxJS",
        "Tailwind CSS"
      ],
      "demo": "link",
      "repo": "link 3"
    },{
      "id": 4,
      "title": "Portafolio Personal",
      "image": "assets/images/portfolio/portfolio.webp",
      "technologies": [
        "Angular v17",
        "TypeScript",
        "RxJS",
        "Tailwind CSS"
      ],
      "demo": "link",
      "repo": "link 4"
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
