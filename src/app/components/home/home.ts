import { Component } from '@angular/core';
import { FooterComponent } from '../footer-component/footer-component';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar-component/nav-bar-component';
import { CarouselComponent } from '../../shared/carousel-component/carousel-component';

@Component({
  selector: 'app-home',
  imports: [FooterComponent, NavBarComponent, CarouselComponent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  constructor(private router: Router) { }

  stackLogos = [
    {
      src: "assets/images/logos/android.png",
      alt: "android_logo",
    },
    {
      src: "assets/images/logos/angular.png",
      alt: "angular_logo"
    },
    {
      src: "assets/images/logos/bit_bucket.png",
      alt: "bitbucket_logo"
    },
    {
      src: "assets/images/logos/css3.png",
      alt: "css3_logo"
    },

    {
      src: "assets/images/logos/dart.png",
      alt: "dart_logo"
    },

    {
      src: "assets/images/logos/django.png",
      alt: "django_logo"
    },

    {
      src: "assets/images/logos/docker.png",
      alt: "docker_logo"
    },

    {
      src: "assets/images/logos/electron.png",
      alt: "electron_logo"
    },

    {
      src: "assets/images/logos/eslint.png",
      alt: "eslint_logo"
    },

    {
      src: "assets/images/logos/express.png",
      alt: "express_logo"
    },
    {
      src: "assets/images/logos/fast_api.png",
      alt: "fast_api_logo"
    },
    {
      src: "assets/images/logos/figma.png",
      alt: "figma_logo"
    },
    {
      src: "assets/images/logos/firebase.png",
      alt: "firebase_logo"
    },
    {
      src: "assets/images/logos/gcp.png",
      alt: "gcp_logo"
    },
    {
      src: "assets/images/logos/git.png",
      alt: "git_logo"
    },

    {
      src: "assets/images/logos/github_actions.png",
      alt: "github_actions_logo"
    },

    {
      src: "assets/images/logos/gradle.png",
      alt: "gradle_logo"
    },
    {
      src: "assets/images/logos/grafana.png",
      alt: "grafana_logo"
    },
    {
      src: "assets/images/logos/html.png",
      alt: "html_logo"
    },
    {
      src: "assets/images/logos/java.png",
      alt: "java_logo"
    },
    {
      src: "assets/images/logos/javascript.png",
      alt: "javascript_logo"
    },
    {
      src: "assets/images/logos/kotlin.png",
      alt: "kotlin_logo"
    },
    {
      src: "assets/images/logos/Ktor.png",
      alt: "ktor_logo"
    },
    {
      src: "assets/images/logos/kubernetes.png",
      alt: "kubernetes_logo"
    },
    {
      src: "assets/images/logos/mongo.png",
      alt: "mongo_logo"
    },
    {
      src: "assets/images/logos/my_sql.png",
      alt: "MySql_logo"
    },
    {
      src: "assets/images/logos/nginx.png",
      alt: "nginx_logo"
    },
    {
      src: "assets/images/logos/node.png",
      alt: "node_logo"
    },
    {
      src: "assets/images/logos/npm.png",
      alt: "npm_logo"
    },
    {
      src: "assets/images/logos/postgres.png",
      alt: "postgres_logo"
    },
    {
      src: "assets/images/logos/python.png",
      alt: "python_logo"
    },
    {
      src: "assets/images/logos/react.png",
      alt: "react_logo"
    },
    {
      src: "assets/images/logos/spring.png",
      alt: "spring_logo"
    },
    {
      src: "assets/images/logos/swagger.png",
      alt: "swagger_logo"
    },
    {
      src: "assets/images/logos/tailwind.png",
      alt: "tailwind_logo"
    },
    {
      src: "assets/images/logos/typescript.png",
      alt: "typescript_logo"
    },
    {
      src: "assets/images/logos/vue.png",
      alt: "vue_logo"
    },
  ]

  onProjectClicked(projectTitle: string) {
    if (projectTitle === 'task-manager') {
      this.router.navigate(['/task-manager']);
    }
  }

}
