import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useNoticiasStore = defineStore('noticias', () => {
    // Estado
    const noticias = ref([
        {
            id: 1,
            titulo: "Novo programa de reciclagem lançado na cidade",
            resumo: "A prefeitura lançou um programa inovador de reciclagem que promete reduzir em 30% o lixo enviado para aterros sanitários nos próximos dois anos.",
            conteudo: "A prefeitura municipal anunciou hoje o lançamento de um programa inovador de reciclagem que visa transformar a forma como a cidade lida com seus resíduos. O programa, chamado 'Recicla+', inclui a instalação de novos pontos de coleta seletiva, incentivos fiscais para empresas que adotarem práticas sustentáveis e campanhas educativas nas escolas. Segundo o secretário de meio ambiente, a expectativa é reduzir em 30% o volume de lixo enviado para aterros sanitários nos próximos dois anos. 'Este é um passo importante para tornarmos nossa cidade mais sustentável e consciente', afirmou o secretário durante a cerimônia de lançamento.",
            imagem: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "15 de Março, 2024",
            categoria: "Meio Ambiente",
            destaque: true
        },
        {
            id: 2,
            titulo: "Feira de agricultura familiar bate recorde de visitantes",
            resumo: "A feira anual de agricultura familiar recebeu mais de 10 mil visitantes no último fim de semana, superando todas as edições anteriores.",
            conteudo: "A 12ª edição da Feira de Agricultura Familiar, realizada no último fim de semana no Parque de Exposições, bateu recorde de público com mais de 10 mil visitantes. O evento, que reuniu 150 produtores de diversas regiões, comercializou aproximadamente 15 toneladas de produtos orgânicos e artesanais. 'Estamos muito satisfeitos com o resultado. Isso mostra que a população está cada vez mais interessada em consumir produtos locais e de qualidade', comentou Maria Silva, coordenadora do evento. Para o próximo ano, os organizadores já planejam ampliar o espaço e incluir mais atividades educativas sobre alimentação saudável e sustentabilidade.",
            imagem: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "12 de Março, 2024",
            categoria: "Agricultura",
            destaque: false
        },
        {
            id: 3,
            titulo: "Escola municipal vence olimpíada nacional de matemática",
            resumo: "Estudantes da Escola Municipal João da Silva conquistaram o primeiro lugar na Olimpíada Nacional de Matemática, superando mais de 500 escolas.",
            conteudo: "A equipe de estudantes da Escola Municipal João da Silva conquistou o primeiro lugar na 25ª Olimpíada Nacional de Matemática, competindo contra mais de 500 escolas de todo o país. Os alunos Pedro Almeida, Ana Souza e Carlos Ferreira, do 9º ano, foram orientados pelo professor Roberto Oliveira, que atribui o sucesso ao projeto de matemática aplicada desenvolvido na escola nos últimos três anos. 'Esses jovens são brilhantes e dedicados. Trabalhamos muito para chegar até aqui', declarou o professor. A premiação inclui bolsas de estudo e equipamentos para o laboratório de ciências da escola.",
            imagem: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "10 de Março, 2024",
            categoria: "Educação",
            destaque: false
        },
        // ... continua com o restante das notícias ...
    ]);

    const paginaAtual = ref(1);
    const itensPorPagina = ref(6);
    const noticiaDetalhada = ref(null);

    // Getters (computed)
    const noticiaDestaque = computed(() => {
        return noticias.value.find(noticia => noticia.destaque) || noticias.value[0];
    });

    const ultimasNoticias = computed(() => {
        return noticias.value
            .filter(noticia => noticia.id !== noticiaDestaque.value.id)
            .slice(0, 3);
    });

    const totalPaginas = computed(() => {
        return Math.ceil(noticias.value.length / itensPorPagina.value);
    });

    const todasNoticias = computed(() => {
        const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
        const fim = inicio + itensPorPagina.value;
        return noticias.value.slice(inicio, fim);
    });

    // Actions
    function mudarPagina(pagina) {
        if (pagina >= 1 && pagina <= totalPaginas.value) {
            paginaAtual.value = pagina;
        }
    }

    function getNoticiaById(id) {
        return noticias.value.find(noticia => noticia.id === id);
    }

    function setNoticiaDetalhada(id) {
        noticiaDetalhada.value = getNoticiaById(id);
    }

    function adicionarNoticia(noticia) {
        const novoId = Math.max(...noticias.value.map(n => n.id)) + 1;
        noticias.value.push({
            id: novoId,
            ...noticia,
            destaque: noticia.destaque || false
        });
    }

    function editarNoticia(id, noticiaAtualizada) {
        const index = noticias.value.findIndex(noticia => noticia.id === id);
        if (index !== -1) {
            noticias.value[index] = { ...noticias.value[index], ...noticiaAtualizada };
        }
    }

    function removerNoticia(id) {
        noticias.value = noticias.value.filter(noticia => noticia.id !== id);
    }

    function filtrarNoticiasPorCategoria(categoria) {
        if (!categoria) return noticias.value;
        return noticias.value.filter(noticia => noticia.categoria === categoria);
    }

    return {
        noticias,
        paginaAtual,
        itensPorPagina,
        noticiaDetalhada,
        noticiaDestaque,
        ultimasNoticias,
        totalPaginas,
        todasNoticias,
        mudarPagina,
        getNoticiaById,
        setNoticiaDetalhada,
        adicionarNoticia,
        editarNoticia,
        removerNoticia,
        filtrarNoticiasPorCategoria
    };
}); 