import { Component, OnInit } from '@angular/core';
import { Kuis } from '../berbagi/kuis';

@Component({
  selector: 'app-kuis-rido',
  templateUrl: './kuis-rido.component.html',
  styleUrls: ['./kuis-rido.component.css']
})
export class KuisRidoComponent implements OnInit {

  daftarMahasiswa : Kuis[] = [];
  nim = '';
  nama = '';
  kelas = '';
  mahasiswa;

  constructor() { }

  ngOnInit() {
  }

  tambahMahasiswa(){
    this.mahasiswa = new Kuis (this.nim, this.nama, this.kelas)
    this.daftarMahasiswa.push(this.mahasiswa);
    
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }

}
