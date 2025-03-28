import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useCompaniesStore = defineStore('companies', () => {
    // Estado
    const companies = ref([
        {
            id: 1,
            nome: "TechSolutions",
            slogan: "Inovação para o seu negócio",
            descricao: "A TechSolutions é uma empresa de tecnologia especializada em soluções de software para pequenas e médias empresas. Com mais de 10 anos de experiência no mercado, oferecemos sistemas personalizados que otimizam processos e aumentam a produtividade. Nossa equipe altamente qualificada está sempre atualizada com as últimas tendências em tecnologia para oferecer o melhor serviço aos nossos clientes.",
            logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Tecnologia",
            fundacao: 2012,
            tamanho: "50-200 funcionários",
            sede: "São Paulo, SP",
            website: "www.techsolutions.com.br",
            telefone: "(11) 3333-4444",
            email: "contato@techsolutions.com.br",
            redesSociais: {
                linkedin: "techsolutions",
                instagram: "techsolutions_br",
                facebook: "techsolutionsbrasil"
            },
            diferenciais: [
                "Atendimento personalizado",
                "Suporte 24/7",
                "Soluções escaláveis",
                "Equipe especializada"
            ],
            servicos: [
                "Desenvolvimento de software",
                "Consultoria em TI",
                "Soluções em cloud",
                "Sistemas integrados"
            ],
            destaque: true
        },
        {
            id: 2,
            nome: "EcoGreen Soluções Ambientais",
            slogan: "Sustentabilidade para um futuro melhor",
            descricao: "A EcoGreen é uma empresa pioneira em soluções ambientais, dedicada a criar alternativas sustentáveis para indústrias e municípios. Nossos projetos incluem sistemas de tratamento de resíduos, captação de água pluvial, energia solar e consultoria ambiental. Com uma equipe multidisciplinar, desenvolvemos projetos sob medida que atendem às necessidades específicas de cada cliente, sempre com foco na preservação ambiental e na viabilidade econômica.",
            logo: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Meio Ambiente",
            fundacao: 2015,
            tamanho: "20-50 funcionários",
            sede: "Curitiba, PR",
            website: "www.ecogreen.com.br",
            telefone: "(41) 2222-3333",
            email: "contato@ecogreen.com.br",
            redesSociais: {
                linkedin: "ecogreen",
                instagram: "ecogreen_brasil",
                facebook: "ecogreensolucoes"
            },
            diferenciais: [
                "Projetos certificados",
                "Soluções econômicas",
                "Equipe especializada",
                "Responsabilidade social"
            ],
            servicos: [
                "Gestão de resíduos",
                "Energia renovável",
                "Consultoria ambiental",
                "Projetos de reflorestamento"
            ],
            destaque: true
        },
        {
            id: 3,
            nome: "Construtora Horizonte",
            slogan: "Construindo sonhos com solidez",
            descricao: "A Construtora Horizonte atua no mercado imobiliário há mais de 20 anos, com foco em empreendimentos residenciais e comerciais de alto padrão. Nossa missão é criar espaços que unem funcionalidade, estética e qualidade, sempre respeitando os prazos e o orçamento estabelecidos. Com um portfólio diversificado que inclui edifícios residenciais, condomínios fechados e centros comerciais, conquistamos a confiança de nossos clientes e parceiros.",
            logo: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Construção Civil",
            fundacao: 2001,
            tamanho: "200+ funcionários",
            sede: "Rio de Janeiro, RJ",
            website: "www.construtorahorizonte.com.br",
            telefone: "(21) 4444-5555",
            email: "contato@horizonte.com.br",
            redesSociais: {
                linkedin: "construtorahorizonte",
                instagram: "horizonte_oficial",
                facebook: "horizonteconstrutora"
            },
            diferenciais: [
                "Projetos sustentáveis",
                "Materiais de qualidade",
                "Financiamento facilitado",
                "Garantia estendida"
            ],
            servicos: [
                "Construção residencial",
                "Empreendimentos comerciais",
                "Reformas e ampliações",
                "Gerenciamento de obras"
            ],
            destaque: false
        },
        {
            id: 4,
            nome: "EducaMais",
            slogan: "Educação inovadora para todas as idades",
            descricao: "A EducaMais é uma instituição educacional que oferece cursos presenciais e online para crianças, jovens e adultos. Com uma metodologia focada no desenvolvimento de habilidades práticas e no pensamento crítico, preparamos nossos alunos para os desafios do século XXI. Nossos cursos abrangem diversas áreas do conhecimento, desde programação e robótica até idiomas e artes, sempre com professores qualificados e material didático exclusivo.",
            logo: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Educação",
            fundacao: 2017,
            tamanho: "50-100 funcionários",
            sede: "Belo Horizonte, MG",
            website: "www.educamais.com.br",
            telefone: "(31) 5555-6666",
            email: "contato@educamais.com.br",
            redesSociais: {
                linkedin: "educamais",
                instagram: "educamais_oficial",
                facebook: "educamaisoficial"
            },
            diferenciais: [
                "Metodologia inovadora",
                "Professores especializados",
                "Plataforma digital própria",
                "Certificação reconhecida"
            ],
            servicos: [
                "Cursos para crianças",
                "Formação profissional",
                "Educação corporativa",
                "Preparatório para concursos"
            ],
            destaque: false
        },
        {
            id: 5,
            nome: "HealthLife",
            slogan: "Sua saúde em primeiro lugar",
            descricao: "A HealthLife é uma clínica médica integrada que oferece atendimento humanizado nas principais especialidades da medicina. Com uma infraestrutura moderna e profissionais altamente qualificados, garantimos o melhor cuidado para nossos pacientes. Além dos serviços médicos, oferecemos programas de prevenção e promoção da saúde, com foco no bem-estar físico e mental. Nossa abordagem multidisciplinar assegura um tratamento completo e personalizado para cada indivíduo.",
            logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Saúde",
            fundacao: 2014,
            tamanho: "50-200 funcionários",
            sede: "Porto Alegre, RS",
            website: "www.healthlife.com.br",
            telefone: "(51) 6666-7777",
            email: "contato@healthlife.com.br",
            redesSociais: {
                linkedin: "healthlifeclinica",
                instagram: "healthlife_oficial",
                facebook: "healthlifesaude"
            },
            diferenciais: [
                "Atendimento 24 horas",
                "Equipe multidisciplinar",
                "Tecnologia de ponta",
                "Instalações confortáveis"
            ],
            servicos: [
                "Consultas especializadas",
                "Exames diagnósticos",
                "Programas preventivos",
                "Terapias complementares"
            ],
            destaque: true
        },
        {
            id: 6,
            nome: "Fintech Capital",
            slogan: "Soluções financeiras inteligentes",
            descricao: "A Fintech Capital é uma empresa de tecnologia financeira que revoluciona a forma como as pessoas e empresas lidam com dinheiro. Através de uma plataforma digital intuitiva, oferecemos serviços como conta digital, investimentos, empréstimos e gestão financeira, tudo com taxas competitivas e processos simplificados. Nossa missão é democratizar o acesso a produtos financeiros de qualidade, utilizando tecnologia avançada para garantir segurança e praticidade aos nossos clientes.",
            logo: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Finanças",
            fundacao: 2019,
            tamanho: "20-50 funcionários",
            sede: "São Paulo, SP",
            website: "www.fintechcapital.com.br",
            telefone: "(11) 7777-8888",
            email: "contato@fintechcapital.com.br",
            redesSociais: {
                linkedin: "fintechcapital",
                instagram: "fintech_capital",
                facebook: "fintechcapitalbr"
            },
            diferenciais: [
                "Tecnologia de ponta",
                "Segurança avançada",
                "Atendimento humanizado",
                "Taxas competitivas"
            ],
            servicos: [
                "Conta digital",
                "Investimentos automatizados",
                "Crédito pessoal",
                "Gestão financeira"
            ],
            destaque: false
        },
        {
            id: 7,
            nome: "AgroTech Soluções",
            slogan: "Tecnologia a serviço do campo",
            descricao: "A AgroTech desenvolve soluções tecnológicas para o agronegócio, ajudando produtores rurais a aumentar a produtividade e otimizar recursos. Nossos produtos incluem sistemas de monitoramento de plantações, drones para análise de solo e cultivo, sensores de irrigação inteligente e softwares de gestão agrícola. Com uma equipe de engenheiros agrônomos e desenvolvedores, criamos tecnologias adaptadas à realidade brasileira, contribuindo para uma agricultura mais eficiente e sustentável.",
            logo: "https://images.unsplash.com/photo-1593193583588-26dcd846fec3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Agronegócio",
            fundacao: 2016,
            tamanho: "20-50 funcionários",
            sede: "Ribeirão Preto, SP",
            website: "www.agrotech.com.br",
            telefone: "(16) 8888-9999",
            email: "contato@agrotech.com.br",
            redesSociais: {
                linkedin: "agrotechsolucoes",
                instagram: "agrotech_br",
                facebook: "agrotechbrasil"
            },
            diferenciais: [
                "Tecnologia adaptada ao Brasil",
                "Suporte especializado",
                "Soluções personalizadas",
                "Resultados comprovados"
            ],
            servicos: [
                "Monitoramento de cultivos",
                "Agricultura de precisão",
                "Sistemas de irrigação",
                "Software de gestão rural"
            ],
            destaque: false
        },
        {
            id: 8,
            nome: "Creative Design Studio",
            slogan: "Transformando ideias em experiências visuais",
            descricao: "O Creative Design Studio é uma agência de design full service que oferece soluções criativas para marcas de todos os tamanhos. Nossa equipe de designers, redatores e estrategistas trabalha em conjunto para criar identidades visuais, websites, embalagens e campanhas publicitárias que se destacam no mercado. Com um processo colaborativo, entendemos profundamente as necessidades de cada cliente para desenvolver projetos que não apenas atraem visualmente, mas também comunicam efetivamente a mensagem da marca.",
            logo: "https://images.unsplash.com/photo-1534670007418-bc197b9e2a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            capa: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
            categoria: "Design e Comunicação",
            fundacao: 2013,
            tamanho: "10-20 funcionários",
            sede: "Florianópolis, SC",
            website: "www.creativedesignstudio.com.br",
            telefone: "(48) 9999-0000",
            email: "contato@creativedesign.com.br",
            redesSociais: {
                linkedin: "creativedesignstudio",
                instagram: "creative_design_studio",
                facebook: "creativedesignstudiobr"
            },
            diferenciais: [
                "Abordagem personalizada",
                "Equipe multidisciplinar",
                "Projetos premiados",
                "Metodologia ágil"
            ],
            servicos: [
                "Identidade visual",
                "Design de websites",
                "Design de embalagens",
                "Campanhas publicitárias"
            ],
            destaque: false
        }
    ]);

    const paginaAtual = ref(1);
    const itensPorPagina = ref(4);
    const empresaDetalhada = ref(null);
    const categoriaFiltrada = ref(null);

    // Getters (computed)
    const empresasDestaque = computed(() => {
        return companies.value.filter(empresa => empresa.destaque);
    });

    const totalPaginas = computed(() => {
        let empresasParaPaginar = companies.value;
        if (categoriaFiltrada.value) {
            empresasParaPaginar = companies.value.filter(empresa => empresa.categoria === categoriaFiltrada.value);
        }
        return Math.ceil(empresasParaPaginar.length / itensPorPagina.value);
    });

    const empresasPaginadas = computed(() => {
        let empresasParaPaginar = companies.value;
        if (categoriaFiltrada.value) {
            empresasParaPaginar = companies.value.filter(empresa => empresa.categoria === categoriaFiltrada.value);
        }

        const inicio = (paginaAtual.value - 1) * itensPorPagina.value;
        const fim = inicio + itensPorPagina.value;
        return empresasParaPaginar.slice(inicio, fim);
    });

    const categoriasDisponiveis = computed(() => {
        const categorias = new Set(companies.value.map(empresa => empresa.categoria));
        return Array.from(categorias);
    });

    const empresasRelacionadas = computed(() => {
        if (!empresaDetalhada.value) return [];

        return companies.value
            .filter(empresa =>
                empresa.categoria === empresaDetalhada.value.categoria &&
                empresa.id !== empresaDetalhada.value.id
            )
            .slice(0, 3);
    });

    // Actions
    function mudarPagina(pagina) {
        if (pagina >= 1 && pagina <= totalPaginas.value) {
            paginaAtual.value = pagina;
        }
    }

    function getEmpresaById(id) {
        return companies.value.find(empresa => empresa.id === id);
    }

    function setEmpresaDetalhada(id) {
        empresaDetalhada.value = getEmpresaById(id);
    }

    function filtrarPorCategoria(categoria) {
        categoriaFiltrada.value = categoria;
        paginaAtual.value = 1; // Resetar para a primeira página ao filtrar
    }

    function limparFiltro() {
        categoriaFiltrada.value = null;
        paginaAtual.value = 1;
    }

    function adicionarEmpresa(empresa) {
        const novoId = Math.max(...companies.value.map(e => e.id)) + 1;
        companies.value.push({
            id: novoId,
            ...empresa,
            destaque: empresa.destaque || false
        });
    }

    function editarEmpresa(id, empresaAtualizada) {
        const index = companies.value.findIndex(empresa => empresa.id === id);
        if (index !== -1) {
            companies.value[index] = { ...companies.value[index], ...empresaAtualizada };
        }
    }

    function removerEmpresa(id) {
        companies.value = companies.value.filter(empresa => empresa.id !== id);
    }

    function buscarEmpresas(termo) {
        if (!termo) return companies.value;

        termo = termo.toLowerCase();
        return companies.value.filter(empresa =>
            empresa.nome.toLowerCase().includes(termo) ||
            empresa.descricao.toLowerCase().includes(termo) ||
            empresa.categoria.toLowerCase().includes(termo)
        );
    }

    return {
        companies,
        paginaAtual,
        itensPorPagina,
        empresaDetalhada,
        categoriaFiltrada,
        empresasDestaque,
        totalPaginas,
        empresasPaginadas,
        categoriasDisponiveis,
        empresasRelacionadas,
        mudarPagina,
        getEmpresaById,
        setEmpresaDetalhada,
        filtrarPorCategoria,
        limparFiltro,
        adicionarEmpresa,
        editarEmpresa,
        removerEmpresa,
        buscarEmpresas
    };
}); 