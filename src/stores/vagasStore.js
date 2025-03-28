import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useVagasStore = defineStore('vagas', () => {
    // Estado
    const vagas = ref([
        {
            id: 1,
            cargo: "Desenvolvedor Full Stack",
            empresa: "TechSolutions",
            empresaLogo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            descricao: "Estamos procurando um desenvolvedor full stack com experiência em React, Node.js e bancos de dados relacionais para trabalhar em projetos inovadores.",
            requisitos: [
                "Experiência com React e Node.js",
                "Conhecimento de bancos de dados SQL",
                "Metodologias ágeis",
                "Inglês intermediário"
            ],
            beneficios: [
                "Plano de saúde",
                "Vale refeição",
                "Gympass",
                "Horário flexível",
                "Home office"
            ],
            area: "Tecnologia",
            nivel: "Pleno",
            local: "São Paulo, SP (Híbrido)",
            salario: "R$ 8.000 - R$ 10.000",
            dataPublicacao: "15/03/2024",
            status: "Aberta"
        }
    ]);

    const paginaAtual = ref(1);
    const itensPorPagina = ref(10);
    const areaFiltrada = ref(null);
    const nivelFiltrado = ref(null);
    const statusFiltrado = ref(null);
    const termoBusca = ref('');

    // Getters (computed)
    const vagasFiltradas = computed(() => {
        let resultado = vagas.value;

        if (areaFiltrada.value) {
            resultado = resultado.filter(v => v.area === areaFiltrada.value);
        }

        if (nivelFiltrado.value) {
            resultado = resultado.filter(v => v.nivel === nivelFiltrado.value);
        }

        if (statusFiltrado.value) {
            resultado = resultado.filter(v => v.status === statusFiltrado.value);
        }

        if (termoBusca.value) {
            const termo = termoBusca.value.toLowerCase();
            resultado = resultado.filter(v =>
                v.cargo.toLowerCase().includes(termo) ||
                v.empresa.toLowerCase().includes(termo) ||
                v.descricao.toLowerCase().includes(termo)
            );
        }

        return resultado;
    });

    const totalPaginas = computed(() => {
        return Math.ceil(vagasFiltradas.value.length / itensPorPagina.value);
    });

    const vagasPaginadas = computed(() => {
        const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
        const fim = inicio + itensPorPagina.value;
        return vagasFiltradas.value.slice(inicio, fim);
    });

    const areasDisponiveis = computed(() => {
        const areas = new Set(vagas.value.map(v => v.area));
        return Array.from(areas);
    });

    const niveisDisponiveis = computed(() => {
        const niveis = new Set(vagas.value.map(v => v.nivel));
        return Array.from(niveis);
    });

    // Actions
    function mudarPagina(pagina) {
        if (pagina >= 1 && pagina <= totalPaginas.value) {
            paginaAtual.value = pagina;
        }
    }

    function filtrarPorArea(area) {
        areaFiltrada.value = area;
        paginaAtual.value = 1;
    }

    function filtrarPorNivel(nivel) {
        nivelFiltrado.value = nivel;
        paginaAtual.value = 1;
    }

    function filtrarPorStatus(status) {
        statusFiltrado.value = status;
        paginaAtual.value = 1;
    }

    function buscar(termo) {
        termoBusca.value = termo;
        paginaAtual.value = 1;
    }

    function limparFiltros() {
        areaFiltrada.value = null;
        nivelFiltrado.value = null;
        statusFiltrado.value = null;
        termoBusca.value = '';
        paginaAtual.value = 1;
    }

    function adicionarVaga(vaga) {
        const novoId = Math.max(...vagas.value.map(v => v.id)) + 1;
        vagas.value.push({
            id: novoId,
            ...vaga
        });
    }

    function editarVaga(id, vagaAtualizada) {
        const index = vagas.value.findIndex(v => v.id === id);
        if (index !== -1) {
            vagas.value[index] = { ...vagas.value[index], ...vagaAtualizada };
        }
    }

    function removerVaga(id) {
        vagas.value = vagas.value.filter(v => v.id !== id);
    }

    return {
        vagas,
        paginaAtual,
        itensPorPagina,
        areaFiltrada,
        nivelFiltrado,
        statusFiltrado,
        termoBusca,
        vagasFiltradas,
        totalPaginas,
        vagasPaginadas,
        areasDisponiveis,
        niveisDisponiveis,
        mudarPagina,
        filtrarPorArea,
        filtrarPorNivel,
        filtrarPorStatus,
        buscar,
        limparFiltros,
        adicionarVaga,
        editarVaga,
        removerVaga
    };
}); 