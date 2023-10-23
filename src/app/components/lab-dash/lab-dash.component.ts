import { Component } from '@angular/core';
import { LabService } from 'src/app/services/lab.service';
import { Lab } from '../models/lab';

@Component({
  selector: 'app-lab-dash',
  templateUrl: './lab-dash.component.html',
  styleUrls: ['./lab-dash.component.scss']
})
export class LabDashComponent {
  labs: Lab[] = [];
  filteredLabs: Lab[] = [];
  nameFilter = '';
  descriptionFilter = '';
  statusFilter = 'all';
  floorFilter: number | undefined;

  constructor(private labService: LabService) {}

  ngOnInit() {
    this.carregarLaboratorios();
  }

  carregarLaboratorios() {
    this.labService.getAllLabs().subscribe((labs) => {
      this.labs = labs;
      this.filterLabs();
    });
  }

  filterLabs() {
    this.filteredLabs = this.labs.filter(lab =>
      (this.nameFilter === '' || lab.name.toLowerCase().includes(this.nameFilter.toLowerCase())) &&
      (this.descriptionFilter === '' || lab.description.toLowerCase().includes(this.descriptionFilter.toLowerCase())) &&
      (this.statusFilter === 'all' || lab.isActive === (this.statusFilter === 'true')) &&
      (this.floorFilter === undefined || lab.floor === this.floorFilter)
    );
  }
    visualizarLab(id: number) {
    }
  
    editarLab(id: number) {
    }
  
    excluirLab(id: number) {
    }
}
