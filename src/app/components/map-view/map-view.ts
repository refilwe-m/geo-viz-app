import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-map-view',
  imports: [ReactiveFormsModule],
  templateUrl: './map-view.html',
  styleUrl: './map-view.scss',
})
export class MapView implements OnInit {
  mapForm: FormGroup;
  private map: any;
  private marker: any;

  constructor(private fb: FormBuilder) {
    this.mapForm = this.fb.group({
      latitude: [
        '',
        [Validators.required, Validators.min(-90), Validators.max(90)],
      ],
      longitude: [
        '',
        [Validators.required, Validators.min(-180), Validators.max(180)],
      ],
    });
  }

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
      this.map
    );
  }

  onSubmit(): void {
    if (this.mapForm.valid) {
      const { latitude, longitude } = this.mapForm.value;
      this.updateMarker(Number(latitude), Number(longitude));
    }
  }

  private updateMarker(lat: number, lng: number): void {
    if (this.marker) {
      this.marker.setLatLng([lat, lng]);
    } else {
      this.marker = L.marker([lat, lng])
        .addTo(this.map)
        .bindPopup(`Location: ${lat}, ${lng}`)
        .openPopup();
    }
    this.map.setView([lat, lng], 13);
  }
  animateMarker(
    startLat: number,
    startLng: number,
    endLat: number,
    endLng: number
  ): void {
    const steps = 100;
    const latStep = (endLat - startLat) / steps;
    const lngStep = (endLng - startLng) / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep >= steps) {
        clearInterval(interval);
        return;
      }

      const newLat = startLat + latStep * currentStep;
      const newLng = startLng + lngStep * currentStep;
      this.updateMarker(newLat, newLng);
      currentStep++;
    }, 50);
  }
}
