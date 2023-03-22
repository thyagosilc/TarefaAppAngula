import { formatDate } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Tarefa } from 'src/app/Tarefa';
import { TarefasService } from './../../tarefas.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent {
  formulario: any;
  tituloFormulario!: string;
  tarefas!: Tarefa[];

  id!: string;
  descricaoTarefa!: string;

  visibilidadeTabela: boolean = true;
  visibilidadeFormulario: boolean = false;

  modalRef!: BsModalRef;

  constructor(private tarefasService: TarefasService) {}

  ngOnInit(): void {
    this.tarefasService.ObterTodos().subscribe((resultado) => {
      this.tarefas = resultado;
    });

    this.tituloFormulario = 'Nova Tarefa';
    this.formulario = new FormGroup({
      descricao: new FormControl(null),
      data: new FormControl(null),
      status: new FormControl(null),
    });
  }

  ExibirFormularioCadastro(): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;
    this.tituloFormulario = 'Nova Tarefa';
    this.formulario = new FormGroup({
      descricao: new FormControl(null),
      data: new FormControl(null),
      status: new FormControl(null),
    });
  }
  ExibirFormularioAtualizacao(id: string): void {
    this.visibilidadeTabela = false;
    this.visibilidadeFormulario = true;

    this.tarefasService.ObterPorId(id).subscribe((resultado) => {
      this.tituloFormulario = `Atualizar: ${resultado.descricao}`;
      this.formulario = new FormGroup({
        id: new FormControl(resultado.id),
        descricao: new FormControl(resultado.descricao),
        data: new FormControl(formatDate(new Date(resultado.data), 'yyyy-MM-dd', 'en_US')),
        status: new FormControl(resultado.status),
      });
    });
  }
  EnviarFormulario(): void {
    const tarefa: Tarefa = this.formulario.value;

    if (tarefa.id != null) {
      this.tarefasService.AtualizarTarefa(tarefa).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Tarefa atualizada com sucesso');
        this.tarefasService.ObterTodos().subscribe((registros) => {
          this.tarefas = registros;
        });
      });
    } else {
      this.tarefasService.SalvarTarefa(tarefa).subscribe((resultado) => {
        this.visibilidadeFormulario = false;
        this.visibilidadeTabela = true;
        alert('Tarefa incluida com sucesso');
        this.tarefasService.ObterTodos().subscribe((registros) => {
          this.tarefas = registros;
        });
      });
    }
  }
  Voltar(): void {
    this.visibilidadeTabela = true;
    this.visibilidadeFormulario = false;
  }

  ExcluirTarefa(id: string) {
    this.tarefasService.ExcluirTarefa(id).subscribe((resultado) => {
      alert('Tarefa excluida com sucesso');
      this.tarefasService.ObterTodos().subscribe((registros) => {
        this.tarefas = registros;
      });
    });
  }
}
