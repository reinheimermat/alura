export interface Tarefa {
    descricao: string
    concluida: boolean
}

export interface EstadoAplicacao {
    tarefas: Tarefa[]
    tarefaSelecionada: Tarefa | null
}

let estadoInicial: EstadoAplicacao = {
    tarefas: [
        {
            descricao: 'Tarefa concluída',
            concluida: true
        },
        {
            descricao: 'Tarefa pendente 1',
            concluida: false
        },
        {
            descricao: 'Tarefa pendente 2',
            concluida: false
        }
    ],
    tarefaSelecionada: null
}

function selecionarTarefa (estado: EstadoAplicacao, tarefa: Tarefa): EstadoAplicacao {
    return {
        ...estado,
        tarefaSelecionada: tarefa === estado.tarefaSelecionada ? null : tarefa
    }
}

function atualizarUI () {
    const ulTarefas = document.querySelector('.app__section-task-list')
    // Limpando lista
    if (ulTarefas) {
        ulTarefas.innerHTML = ''
    }

    estadoInicial.tarefas.forEach(tarefa => {
        
    })
}