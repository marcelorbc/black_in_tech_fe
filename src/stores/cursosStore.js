import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCursosStore = defineStore('cursos', () => {
    // Estado
    const cursos = ref([
        {
            id: 1,
            titulo: "Desenvolvimento Web Full Stack",
            descricao: "Aprenda a criar aplicações web completas utilizando as tecnologias mais demandadas do mercado.",
            imagem: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Tecnologia",
            nivel: "Intermediário",
            duracao: "60 horas",
            alunos: 150,
            avaliacao: 4.8,
            numAvaliacoes: 120,
            conteudo: [
                {
                    modulo: "Introdução ao Desenvolvimento Web",
                    aulas: ["HTML5 Básico", "CSS3 Fundamental", "JavaScript Essencial"]
                },
                {
                    modulo: "Front-end Avançado",
                    aulas: ["React.js", "Styled Components", "State Management"]
                },
                {
                    modulo: "Back-end",
                    aulas: ["Node.js", "Express", "REST APIs"]
                },
                {
                    modulo: "Banco de Dados",
                    aulas: ["MongoDB", "MySQL", "ORM/ODM"]
                },
                {
                    modulo: "Projeto Final",
                    aulas: ["Planejamento", "Desenvolvimento", "Deploy"]
                }
            ],
            instrutor: {
                nome: "Carlos Silva",
                bio: "Desenvolvedor Full Stack com mais de 10 anos de experiência",
                foto: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            },
            preco: "R$ 799,00",
            promocao: "R$ 599,00",
            destaque: true,
            status: "Ativo",
            dataInicio: "20/04/2024"
        }
    ]);

    const paginaAtual = ref(1);
    const itensPorPagina = ref(9);
    const categoriaFiltrada = ref(null);
    const nivelFiltrado = ref(null);
    const termoBusca = ref('');

    // Getters (computed)
    const cursosFiltrados = computed(() => {
        let resultado = cursos.value;

        if (categoriaFiltrada.value) {
            resultado = resultado.filter(c => c.categoria === categoriaFiltrada.value);
        }

        if (nivelFiltrado.value) {
            resultado = resultado.filter(c => c.nivel === nivelFiltrado.value);
        }

        if (termoBusca.value) {
            const termo = termoBusca.value.toLowerCase();
            resultado = resultado.filter(c =>
                c.titulo.toLowerCase().includes(termo) ||
                c.descricao.toLowerCase().includes(termo) ||
                c.categoria.toLowerCase().includes(termo)
            );
        }

        return resultado;
    });

    const totalPaginas = computed(() => {
        return Math.ceil(cursosFiltrados.value.length / itensPorPagina.value);
    });

    const cursosPaginados = computed(() => {
        const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
        const fim = inicio + itensPorPagina.value;
        return cursosFiltrados.value.slice(inicio, fim);
    });

    const cursosDestaque = computed(() => {
        return cursos.value.filter(c => c.destaque);
    });

    const categoriasDisponiveis = computed(() => {
        const categorias = new Set(cursos.value.map(c => c.categoria));
        return Array.from(categorias);
    });

    const niveisDisponiveis = computed(() => {
        const niveis = new Set(cursos.value.map(c => c.nivel));
        return Array.from(niveis);
    });

    // Actions
    function mudarPagina(pagina) {
        if (pagina >= 1 && pagina <= totalPaginas.value) {
            paginaAtual.value = pagina;
        }
    }

    function filtrarPorCategoria(categoria) {
        categoriaFiltrada.value = categoria;
        paginaAtual.value = 1;
    }

    function filtrarPorNivel(nivel) {
        nivelFiltrado.value = nivel;
        paginaAtual.value = 1;
    }

    function buscar(termo) {
        termoBusca.value = termo;
        paginaAtual.value = 1;
    }

    function limparFiltros() {
        categoriaFiltrada.value = null;
        nivelFiltrado.value = null;
        termoBusca.value = '';
        paginaAtual.value = 1;
    }

    function adicionarCurso(curso) {
        const novoId = Math.max(...cursos.value.map(c => c.id)) + 1;
        cursos.value.push({
            id: novoId,
            ...curso,
            destaque: curso.destaque || false
        });
    }

    function editarCurso(id, cursoAtualizado) {
        const index = cursos.value.findIndex(c => c.id === id);
        if (index !== -1) {
            cursos.value[index] = { ...cursos.value[index], ...cursoAtualizado };
        }
    }

    function removerCurso(id) {
        cursos.value = cursos.value.filter(c => c.id !== id);
    }

    function alternarDestaque(id) {
        const index = cursos.value.findIndex(c => c.id === id);
        if (index !== -1) {
            cursos.value[index].destaque = !cursos.value[index].destaque;
        }
    }

    return {
        cursos,
        paginaAtual,
        itensPorPagina,
        categoriaFiltrada,
        nivelFiltrado,
        termoBusca,
        cursosFiltrados,
        totalPaginas,
        cursosPaginados,
        cursosDestaque,
        categoriasDisponiveis,
        niveisDisponiveis,
        mudarPagina,
        filtrarPorCategoria,
        filtrarPorNivel,
        buscar,
        limparFiltros,
        adicionarCurso,
        editarCurso,
        removerCurso,
        alternarDestaque
    };
}); 