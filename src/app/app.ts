import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapView } from './components/map-view/map-view';
import { Histogram } from './components/histogram/histogram';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MapView, Histogram],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'geo-viz-app';
}
