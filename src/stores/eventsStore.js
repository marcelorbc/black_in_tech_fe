import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useEventsStore = defineStore('events', () => {
    // Estado
    const events = ref([
        {
            id: 1,
            titulo: "Feira de Tecnologia e Inovação",
            resumo: "Venha conhecer as últimas tendências em tecnologia, inovação e empreendedorismo em nosso evento anual.",
            descricao: "A Feira de Tecnologia e Inovação é o evento mais esperado do ano para profissionais de TI, empreendedores e entusiastas da tecnologia. Em sua 5ª edição, o evento contará com mais de 50 palestrantes nacionais e internacionais, além de 100 expositores mostrando as soluções mais inovadoras do mercado. Haverá espaço para networking, rodadas de negócios, hackathon e muito mais. Não perca a oportunidade de fazer parte deste grande momento de conexão e aprendizado.",
            imagem: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "20 a 22 de Abril, 2024",
            horario: "09:00 - 18:00",
            local: "Centro de Convenções",
            endereco: "Av. Principal, 1000, Centro",
            categoria: "Tecnologia",
            destaque: true,
            ingressos: {
                antecipado: "R$ 150,00",
                noLocal: "R$ 180,00",
                estudante: "R$ 75,00"
            },
            contato: {
                email: "feira@tecnologia.com",
                telefone: "(11) 98765-4321"
            }
        },
        {
            id: 2,
            titulo: "Congresso de Gestão Empresarial",
            resumo: "Um evento focado em estratégias de gestão, liderança e transformação digital para empresários e executivos.",
            descricao: "O Congresso de Gestão Empresarial reunirá os maiores especialistas em gestão, marketing e finanças para discutir os desafios e oportunidades do mercado atual. Com palestras direcionadas para diferentes níveis de gestão, o evento abordará temas como transformação digital, liderança em tempos de crise, estratégias de crescimento sustentável e inovação nos negócios. Serão três dias intensos de aprendizado e troca de experiências entre executivos, empreendedores e consultores.",
            imagem: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "5 a 7 de Maio, 2024",
            horario: "08:30 - 17:30",
            local: "Hotel Business Center",
            endereco: "Rua Comercial, 500, Zona Sul",
            categoria: "Negócios",
            destaque: false,
            ingressos: {
                antecipado: "R$ 290,00",
                noLocal: "R$ 350,00",
                estudante: "R$ 145,00"
            },
            contato: {
                email: "congresso@gestao.com",
                telefone: "(11) 3333-2222"
            }
        },
        {
            id: 3,
            titulo: "Festival de Cultura e Arte",
            resumo: "Uma celebração das artes visuais, música, dança e teatro com artistas locais e internacionais.",
            descricao: "O Festival de Cultura e Arte transforma a cidade em um grande palco a céu aberto! Durante uma semana, praças e parques serão tomados por apresentações musicais, intervenções artísticas, espetáculos de dança e teatro. O evento contará com a participação de mais de 300 artistas, divididos em 5 palcos espalhados pela cidade. A programação inclui oficinas gratuitas para todas as idades, exposições, feiras de artesanato e gastronomia. Uma verdadeira festa para celebrar a diversidade cultural e valorizar os talentos locais.",
            imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "10 a 17 de Junho, 2024",
            horario: "Diversas apresentações ao longo do dia",
            local: "Diversos pontos da cidade",
            endereco: "Centro Cultural e praças principais",
            categoria: "Cultura",
            destaque: true,
            ingressos: {
                antecipado: "Gratuito (reservar online)",
                noLocal: "Gratuito (sujeito à lotação)",
                estudante: "N/A"
            },
            contato: {
                email: "contato@festivalcultura.org",
                telefone: "(11) 99999-8888"
            }
        },
        {
            id: 4,
            titulo: "Simpósio de Saúde e Bem-estar",
            resumo: "Um evento dedicado à promoção da saúde integral, com especialistas em medicina preventiva, nutrição e atividade física.",
            descricao: "O Simpósio de Saúde e Bem-estar traz uma abordagem multidisciplinar sobre a saúde física e mental. Profissionais renomados da medicina, psicologia, nutrição e educação física compartilharão conhecimentos sobre prevenção de doenças, alimentação saudável, prática de exercícios e equilíbrio emocional. Além das palestras, o evento oferecerá avaliações gratuitas, demonstrações de práticas integrativas e mostra de produtos naturais e orgânicos. Uma oportunidade única para cuidar da sua saúde de forma completa.",
            imagem: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "15 e 16 de Julho, 2024",
            horario: "09:00 - 19:00",
            local: "Centro Médico Municipal",
            endereco: "Av. da Saúde, 200, Jardim Primavera",
            categoria: "Saúde",
            destaque: false,
            ingressos: {
                antecipado: "R$ 80,00",
                noLocal: "R$ 100,00",
                estudante: "R$ 40,00"
            },
            contato: {
                email: "simposio@saude.com",
                telefone: "(11) 5555-4444"
            }
        },
        {
            id: 5,
            titulo: "Fórum de Sustentabilidade e Meio Ambiente",
            resumo: "Um evento que discute soluções práticas para os desafios ambientais atuais, com foco em ações locais de impacto global.",
            descricao: "O Fórum de Sustentabilidade e Meio Ambiente reunirá ambientalistas, pesquisadores, empresários e representantes do poder público para discutir políticas e ações concretas visando a preservação do meio ambiente e o desenvolvimento sustentável. Durante dois dias, serão apresentados casos de sucesso, novas tecnologias e projetos inovadores que podem ser implementados em diferentes contextos. O evento também contará com uma feira de produtos sustentáveis e workshops práticos sobre reciclagem, compostagem e economia de recursos.",
            imagem: "https://images.unsplash.com/photo-1492496913980-501348b61469?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "8 e 9 de Agosto, 2024",
            horario: "08:00 - 18:00",
            local: "Parque Ecológico",
            endereco: "Estrada Verde, km 5, Zona Rural",
            categoria: "Meio Ambiente",
            destaque: false,
            ingressos: {
                antecipado: "R$ 60,00",
                noLocal: "R$ 80,00",
                estudante: "R$ 30,00"
            },
            contato: {
                email: "forum@sustentabilidade.org",
                telefone: "(11) 4444-3333"
            }
        },
        {
            id: 6,
            titulo: "Workshop de Empreendedorismo e Inovação",
            resumo: "Um dia intensivo de aprendizado para empreendedores iniciantes e experientes que buscam inovar em seus negócios.",
            descricao: "O Workshop de Empreendedorismo e Inovação é um evento prático e dinâmico voltado para quem quer iniciar um negócio ou busca renovar um empreendimento existente. Durante o dia, os participantes terão acesso a ferramentas e metodologias para validação de ideias, prototipagem, análise de mercado e captação de recursos. O formato hands-on permite que cada participante trabalhe em seu próprio projeto, recebendo mentorias individualizadas de empreendedores de sucesso e especialistas em inovação. Uma oportunidade única para transformar ideias em negócios viáveis e rentáveis.",
            imagem: "https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            data: "25 de Agosto, 2024",
            horario: "08:00 - 20:00",
            local: "Centro de Inovação",
            endereco: "Rua dos Inventores, 100, Distrito Tecnológico",
            categoria: "Empreendedorismo",
            destaque: false,
            ingressos: {
                antecipado: "R$ 120,00",
                noLocal: "R$ 150,00",
                estudante: "R$ 60,00"
            },
            contato: {
                email: "workshop@empreender.com",
                telefone: "(11) 2222-1111"
            }
        }
    ]);

    const paginaAtual = ref(1);
    const itensPorPagina = ref(4);
    const eventoDetalhado = ref(null);
    const categoriaFiltrada = ref(null);

    // Getters (computed)
    const eventosDestaque = computed(() => {
        return events.value.filter(evento => evento.destaque);
    });

    const proximosEventos = computed(() => {
        return events.value
            .filter(evento => !evento.destaque)
            .slice(0, 3);
    });

    const totalPaginas = computed(() => {
        let eventosParaPaginar = events.value;
        if (categoriaFiltrada.value) {
            eventosParaPaginar = events.value.filter(evento => evento.categoria === categoriaFiltrada.value);
        }
        return Math.ceil(eventosParaPaginar.length / itensPorPagina.value);
    });

    const eventosPaginados = computed(() => {
        let eventosParaPaginar = events.value;
        if (categoriaFiltrada.value) {
            eventosParaPaginar = events.value.filter(evento => evento.categoria === categoriaFiltrada.value);
        }

        const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
        const fim = inicio + itensPorPagina.value;
        return eventosParaPaginar.slice(inicio, fim);
    });

    const categoriasDisponiveis = computed(() => {
        const categorias = new Set(events.value.map(evento => evento.categoria));
        return Array.from(categorias);
    });

    // Actions
    function mudarPagina(pagina) {
        if (pagina >= 1 && pagina <= totalPaginas.value) {
            paginaAtual.value = pagina;
        }
    }

    function getEventoById(id) {
        return events.value.find(evento => evento.id === id);
    }

    function setEventoDetalhado(id) {
        eventoDetalhado.value = getEventoById(id);
    }

    function filtrarPorCategoria(categoria) {
        categoriaFiltrada.value = categoria;
        paginaAtual.value = 1; // Resetar para a primeira página ao filtrar
    }

    function limparFiltro() {
        categoriaFiltrada.value = null;
        paginaAtual.value = 1;
    }

    function adicionarEvento(evento) {
        const novoId = Math.max(...events.value.map(e => e.id)) + 1;
        events.value.push({
            id: novoId,
            ...evento,
            destaque: evento.destaque || false
        });
    }

    function editarEvento(id, eventoAtualizado) {
        const index = events.value.findIndex(evento => evento.id === id);
        if (index !== -1) {
            events.value[index] = { ...events.value[index], ...eventoAtualizado };
        }
    }

    function removerEvento(id) {
        events.value = events.value.filter(evento => evento.id !== id);
    }

    return {
        events,
        paginaAtual,
        itensPorPagina,
        eventoDetalhado,
        categoriaFiltrada,
        eventosDestaque,
        proximosEventos,
        totalPaginas,
        eventosPaginados,
        categoriasDisponiveis,
        mudarPagina,
        getEventoById,
        setEventoDetalhado,
        filtrarPorCategoria,
        limparFiltro,
        adicionarEvento,
        editarEvento,
        removerEvento
    };
}); 