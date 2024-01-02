export interface Tarefa {
    titulo: string
    concluida: boolean
}

export interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa
}