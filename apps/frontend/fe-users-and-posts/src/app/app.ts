import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '@nx-multi-setup/header';

@Component({
  imports: [RouterModule, Header],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'fe-users-and-posts';
}
