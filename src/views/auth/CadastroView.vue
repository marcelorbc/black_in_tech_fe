<template>
    <MainLayout>
        <div class="cadastro-page">
            <div class="container">
                <div class="cadastro-container">
                    <div class="cadastro-header">
                        <h1 class="title is-2">Junte-se à nossa comunidade</h1>
                        <p class="subtitle is-5">Crie sua conta no Black in Tech</p>
                    </div>

                    <form @submit.prevent="handleCadastro" class="cadastro-form">
                        <div class="form-card">
                            <!-- Todas as informações em um único quadro -->
                            <h2 class="card-title is-4">Dados de Cadastro</h2>

                            <div class="columns">
                                <div class="column">
                                    <!-- Informações pessoais na coluna esquerda -->
                                    <h3 class="subtitle is-5">Informações Pessoais</h3>

                                    <div class="field">
                                        <label class="label">Nome completo*</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.nome"
                                                placeholder="Seu nome completo"
                                                :class="{ 'is-danger': v$.usuario.nome.$error }" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.nome.$error">
                                            {{ v$.usuario.nome.$errors[0].$message }}
                                        </p>
                                    </div>

                                    <div class="field">
                                        <label class="label">Data de nascimento*</label>
                                        <div class="control">
                                            <input class="input" type="date" v-model="usuario.dataNascimento"
                                                :class="{ 'is-danger': v$.usuario.dataNascimento.$error }" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.dataNascimento.$error">
                                            {{ v$.usuario.dataNascimento.$errors[0].$message }}
                                        </p>
                                    </div>

                                    <div class="field">
                                        <label class="label">Telefone*</label>
                                        <div class="control">
                                            <input class="input" type="tel" v-model="usuario.telefone"
                                                placeholder="(00) 00000-0000"
                                                :class="{ 'is-danger': v$.usuario.telefone.$error }" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.telefone.$error">
                                            {{ v$.usuario.telefone.$errors[0].$message }}
                                        </p>
                                    </div>

                                    <div class="field">
                                        <label class="label">Gênero</label>
                                        <div class="control">
                                            <div class="select is-fullwidth">
                                                <select v-model="usuario.genero">
                                                    <option value="" disabled>Selecione</option>
                                                    <option value="masculino">Masculino</option>
                                                    <option value="feminino">Feminino</option>
                                                    <option value="nao-binario">Não binário</option>
                                                    <option value="outro">Outro</option>
                                                    <option value="prefiro-nao-informar">Prefiro não informar</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field">
                                        <label class="label">Cor de pele/Etnia</label>
                                        <div class="control">
                                            <div class="select is-fullwidth">
                                                <select v-model="usuario.corPele">
                                                    <option value="" disabled>Selecione</option>
                                                    <option value="preta">Preta</option>
                                                    <option value="parda">Parda</option>
                                                    <option value="branca">Branca</option>
                                                    <option value="amarela">Amarela</option>
                                                    <option value="indigena">Indígena</option>
                                                    <option value="outra">Outra</option>
                                                    <option value="prefiro-nao-informar">Prefiro não informar</option>
                                                </select>
                                            </div>
                                        </div>
                                        <p class="help">Esta informação é opcional e ajuda nas nossas políticas de
                                            diversidade</p>
                                    </div>
                                </div>

                                <div class="column">
                                    <!-- Informações de conta na coluna direita -->
                                    <h3 class="subtitle is-5">Informações de Conta</h3>

                                    <div class="field">
                                        <label class="label">Email*</label>
                                        <div class="control">
                                            <input class="input" type="email" v-model="usuario.email"
                                                placeholder="seu@email.com"
                                                :class="{ 'is-danger': v$.usuario.email.$error }" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.email.$error">
                                            {{ v$.usuario.email.$errors[0].$message }}
                                        </p>
                                    </div>

                                    <div class="field">
                                        <label class="label">Senha*</label>
                                        <div class="control">
                                            <input class="input" type="password" v-model="usuario.senha"
                                                placeholder="Sua senha"
                                                :class="{ 'is-danger': v$.usuario.senha.$error }" required>
                                        </div>
                                        <p class="help" :class="{ 'is-danger': v$.usuario.senha.$error }">
                                            {{ v$.usuario.senha.$error ? v$.usuario.senha.$errors[0].$message :
                                                'A senha deve conter no mínimo 8 caracteres, ' +
                                                'incluindo letras, números e caracteres especiais' }}
                                        </p>
                                    </div>

                                    <div class="field">
                                        <label class="label">Confirme sua senha*</label>
                                        <div class="control">
                                            <input class="input" type="password" v-model="usuario.confirmaSenha"
                                                placeholder="Confirme sua senha"
                                                :class="{ 'is-danger': v$.usuario.confirmaSenha.$error }" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.confirmaSenha.$error">
                                            {{ v$.usuario.confirmaSenha.$errors[0].$message }}
                                        </p>
                                    </div>

                                    <div class="field">
                                        <label class="label">Foto de perfil</label>
                                        <div class="file has-name is-fullwidth">
                                            <label class="file-label">
                                                <input class="file-input" type="file" @change="handleFileUpload"
                                                    accept="image/*">
                                                <span class="file-cta">
                                                    <span class="file-icon">
                                                        <i class="fas fa-upload"></i>
                                                    </span>
                                                    <span class="file-label">
                                                        Escolher arquivo
                                                    </span>
                                                </span>
                                                <span class="file-name">
                                                    {{ fileName || "Nenhum arquivo selecionado" }}
                                                </span>
                                            </label>
                                        </div>
                                        <p class="help">Opcional: Adicione uma foto para seu perfil (máx. 5MB)</p>
                                    </div>
                                </div>
                            </div>

                            <div class="field">
                                <label class="label">Sobre mim</label>
                                <div class="control">
                                    <textarea class="textarea" v-model="usuario.sobre"
                                        placeholder="Conte um pouco sobre você, sua experiência e interesses na área de tecnologia"
                                        rows="3"></textarea>
                                </div>
                                <p class="help">Opcional: Uma breve descrição para seu perfil (máx. 500 caracteres)</p>
                            </div>

                            <!-- Endereço abaixo das duas colunas principais -->
                            <h3 class="subtitle is-5 mt-5">Endereço</h3>

                            <div class="columns">
                                <div class="column is-4">
                                    <div class="field">
                                        <label class="label">CEP*</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.cep"
                                                placeholder="00000-000" :class="{ 'is-danger': v$.usuario.cep.$error }"
                                                @blur="buscarCep" maxlength="9" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.cep.$error">
                                            {{ v$.usuario.cep.$errors[0].$message }}
                                        </p>
                                        <p class="help is-info" v-if="buscandoCep">
                                            <span class="icon is-small"><i class="fas fa-spinner fa-spin"></i></span>
                                            Buscando endereço...
                                        </p>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="field">
                                        <label class="label">Rua*</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.rua"
                                                placeholder="Nome da rua"
                                                :class="{ 'is-danger': v$.usuario.rua.$error }" :disabled="buscandoCep"
                                                required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.rua.$error">
                                            {{ v$.usuario.rua.$errors[0].$message }}
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-2">
                                    <div class="field">
                                        <label class="label">Número*</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.numero" placeholder="Nº"
                                                :class="{ 'is-danger': v$.usuario.numero.$error }" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.numero.$error">
                                            {{ v$.usuario.numero.$errors[0].$message }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Complemento</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.complemento"
                                                placeholder="Apto, bloco, etc." :disabled="buscandoCep">
                                        </div>
                                    </div>
                                </div>

                                <div class="column">
                                    <div class="field">
                                        <label class="label">Bairro*</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.bairro"
                                                placeholder="Bairro" :class="{ 'is-danger': v$.usuario.bairro.$error }"
                                                :disabled="buscandoCep" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.bairro.$error">
                                            {{ v$.usuario.bairro.$errors[0].$message }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="columns">
                                <div class="column">
                                    <div class="field">
                                        <label class="label">Cidade*</label>
                                        <div class="control">
                                            <input class="input" type="text" v-model="usuario.cidade"
                                                placeholder="Cidade" :class="{ 'is-danger': v$.usuario.cidade.$error }"
                                                :disabled="buscandoCep" required>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.cidade.$error">
                                            {{ v$.usuario.cidade.$errors[0].$message }}
                                        </p>
                                    </div>
                                </div>

                                <div class="column is-3">
                                    <div class="field">
                                        <label class="label">Estado*</label>
                                        <div class="control">
                                            <div class="select is-fullwidth"
                                                :class="{ 'is-danger': v$.usuario.estado.$error }">
                                                <select v-model="usuario.estado" required :disabled="buscandoCep">
                                                    <option value="" disabled>Selecione</option>
                                                    <option v-for="estado in estados" :key="estado.sigla"
                                                        :value="estado.sigla">
                                                        {{ estado.nome }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <p class="help is-danger" v-if="v$.usuario.estado.$error">
                                            {{ v$.usuario.estado.$errors[0].$message }}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <!-- Termos e condições mais compactos -->
                            <div class="section-divider"></div>

                            <div class="field mt-3  checkboxes">
                                <div class="control compact-terms">
                                    <input type="checkbox" v-model="usuario.aceitaTermos"
                                        :class="{ 'is-danger': v$.usuario.aceitaTermos.$error }" required>
                                    <span>
                                        Eu li e aceito os <a href="#" @click.prevent="mostrarTermos">termos de uso</a> e
                                        a <a href="#" @click.prevent="mostrarPrivacidade">política de privacidade</a>*
                                    </span>
                                </div>
                                <p class="help is-danger" v-if="v$.usuario.aceitaTermos.$error">
                                    {{ v$.usuario.aceitaTermos.$errors[0].$message }}
                                </p>
                            </div>

                            <div class="field  checkboxes">
                                <div class="control compact-terms">
                                    <input type="checkbox" v-model="usuario.recebeEmails">
                                    <span>Quero receber emails sobre eventos, oportunidades e novidades</span>
                                </div>
                            </div>
                        </div>

                        <div v-if="error" class="notification is-danger is-light">
                            {{ error }}
                        </div>

                        <div v-if="success" class="notification is-success is-light">
                            {{ success }}
                        </div>

                        <div class="field is-grouped is-grouped-centered">
                            <div class="control">
                                <button type="button" class="button is-medium is-light" @click="resetForm">
                                    Limpar
                                </button>
                            </div>
                            <div class="control">
                                <button type="submit" class="button is-medium is-success"
                                    :class="{ 'is-loading': isLoading }" :disabled="isLoading">
                                    Criar Conta
                                </button>
                            </div>
                        </div>

                        <div class="login-link">
                            <span>Já tem uma conta?</span>
                            <router-link to="/login">Faça login</router-link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </MainLayout>
</template>

<script setup>
import { useVuelidate } from '@vuelidate/core';
import { email, helpers, minLength, required, sameAs } from '@vuelidate/validators';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isLoading = ref(false);
const error = ref('');
const success = ref('');
const fileName = ref('');
const buscandoCep = ref(false);

// Lista de estados brasileiros
const estados = [
    { sigla: 'AC', nome: 'Acre' },
    { sigla: 'AL', nome: 'Alagoas' },
    { sigla: 'AP', nome: 'Amapá' },
    { sigla: 'AM', nome: 'Amazonas' },
    { sigla: 'BA', nome: 'Bahia' },
    { sigla: 'CE', nome: 'Ceará' },
    { sigla: 'DF', nome: 'Distrito Federal' },
    { sigla: 'ES', nome: 'Espírito Santo' },
    { sigla: 'GO', nome: 'Goiás' },
    { sigla: 'MA', nome: 'Maranhão' },
    { sigla: 'MT', nome: 'Mato Grosso' },
    { sigla: 'MS', nome: 'Mato Grosso do Sul' },
    { sigla: 'MG', nome: 'Minas Gerais' },
    { sigla: 'PA', nome: 'Pará' },
    { sigla: 'PB', nome: 'Paraíba' },
    { sigla: 'PR', nome: 'Paraná' },
    { sigla: 'PE', nome: 'Pernambuco' },
    { sigla: 'PI', nome: 'Piauí' },
    { sigla: 'RJ', nome: 'Rio de Janeiro' },
    { sigla: 'RN', nome: 'Rio Grande do Norte' },
    { sigla: 'RS', nome: 'Rio Grande do Sul' },
    { sigla: 'RO', nome: 'Rondônia' },
    { sigla: 'RR', nome: 'Roraima' },
    { sigla: 'SC', nome: 'Santa Catarina' },
    { sigla: 'SP', nome: 'São Paulo' },
    { sigla: 'SE', nome: 'Sergipe' },
    { sigla: 'TO', nome: 'Tocantins' }
];

const usuario = reactive({
    nome: '',
    dataNascimento: '',
    genero: '',
    corPele: '',
    telefone: '',
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    foto: null,
    sobre: '',
    email: '',
    senha: '',
    confirmaSenha: '',
    aceitaTermos: false,
    recebeEmails: false
});

// Regras de validação (adicione as novas regras)
const rules = {
    usuario: {
        nome: { required: helpers.withMessage('O nome é obrigatório', required) },
        dataNascimento: { required: helpers.withMessage('A data de nascimento é obrigatória', required) },
        telefone: { required: helpers.withMessage('O telefone é obrigatório', required) },
        cep: { required: helpers.withMessage('O CEP é obrigatório', required) },
        rua: { required: helpers.withMessage('A rua é obrigatória', required) },
        numero: { required: helpers.withMessage('O número é obrigatório', required) },
        bairro: { required: helpers.withMessage('O bairro é obrigatório', required) },
        cidade: { required: helpers.withMessage('A cidade é obrigatória', required) },
        estado: { required: helpers.withMessage('O estado é obrigatório', required) },
        email: {
            required: helpers.withMessage('O email é obrigatório', required),
            email: helpers.withMessage('Digite um email válido', email)
        },
        senha: {
            required: helpers.withMessage('A senha é obrigatória', required),
            minLength: helpers.withMessage('A senha deve ter pelo menos 8 caracteres', minLength(8))
        },
        confirmaSenha: {
            required: helpers.withMessage('A confirmação de senha é obrigatória', required),
            sameAs: helpers.withMessage('As senhas não coincidem', sameAs(usuario.senha))
        },
        aceitaTermos: {
            sameAs: helpers.withMessage('Você precisa aceitar os termos de uso e a política de privacidade', sameAs(true))
        }
    }
};

const v$ = useVuelidate(rules, { usuario });

// Função para formatar o CEP enquanto o usuário digita
function formatarCep(cep) {
    cep = cep.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (cep.length > 5) {
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2'); // Coloca o hífen depois do 5º dígito
    }
    return cep;
}

// Função para buscar o endereço pelo CEP
async function buscarCep() {
    // Formata o CEP
    usuario.cep = formatarCep(usuario.cep);

    // Verifica se o CEP tem o tamanho correto (8 dígitos)
    if (usuario.cep.replace(/\D/g, '').length !== 8) {
        return;
    }

    buscandoCep.value = true;
    error.value = '';

    try {
        const cepLimpo = usuario.cep.replace(/\D/g, '');
        const response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
        const data = await response.json();

        if (data.erro) {
            error.value = "CEP não encontrado. Por favor, verifique o número informado.";
            return;
        }

        // Preenche os campos de endereço
        usuario.rua = data.logradouro;
        usuario.bairro = data.bairro;
        usuario.cidade = data.localidade;
        usuario.estado = data.uf;

        // Foca no campo número após preencher os dados
        setTimeout(() => {
            document.querySelector('input[v-model="usuario.numero"]')?.focus();
        }, 100);

    } catch (err) {
        console.error("Erro ao buscar CEP:", err);
        error.value = "Ocorreu um erro ao buscar o CEP. Por favor, tente novamente ou preencha manualmente.";
    } finally {
        buscandoCep.value = false;
    }
}

// Tratamento do upload de arquivo
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        fileName.value = file.name;

        // Verificar o tamanho do arquivo (máx. 5MB)
        if (file.size > 5 * 1024 * 1024) {
            error.value = 'O arquivo é muito grande. Tamanho máximo: 5MB.';
            fileName.value = '';
            return;
        }

        usuario.foto = file;
        error.value = '';
    }
}

// Exibir termos de uso
function mostrarTermos() {
    alert('Os termos de uso serão exibidos aqui');
}

// Exibir política de privacidade
function mostrarPrivacidade() {
    alert('A política de privacidade será exibida aqui');
}

// Resetar formulário
function resetForm() {
    Object.keys(usuario).forEach(key => {
        if (key === 'aceitaTermos' || key === 'recebeEmails') {
            usuario[key] = false;
        } else {
            usuario[key] = '';
        }
    });
    fileName.value = '';
    error.value = '';
    success.value = '';
    v$.value.$reset();
}

// Envio do formulário
async function handleCadastro() {
    error.value = '';
    success.value = '';

    // Validar formulário
    const isFormValid = await v$.value.$validate();
    if (!isFormValid) {
        error.value = 'Por favor, corrija os erros no formulário para continuar.';
        return;
    }

    isLoading.value = true;

    try {
        // Simulação de envio para o backend
        // Aqui você faria uma chamada API para cadastrar o usuário
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Dados que seriam enviados para o backend (adicionando os novos campos)
        const dadosParaEnviar = {
            nome: usuario.nome,
            dataNascimento: usuario.dataNascimento,
            genero: usuario.genero || null,
            corPele: usuario.corPele || null,
            telefone: usuario.telefone,
            endereco: {
                cep: usuario.cep,
                rua: usuario.rua,
                numero: usuario.numero,
                complemento: usuario.complemento || null,
                bairro: usuario.bairro,
                cidade: usuario.cidade,
                estado: usuario.estado
            },
            sobre: usuario.sobre || null,
            email: usuario.email,
            senha: usuario.senha,
            recebeEmails: usuario.recebeEmails
        };

        console.log('Dados cadastrados:', dadosParaEnviar);

        // Cadastro bem-sucedido
        success.value = 'Cadastro realizado com sucesso! Redirecionando para a página de login...';

        // Redirecionar para login após alguns segundos
        setTimeout(() => {
            router.push('/login');
        }, 2000);

    } catch (err) {
        console.error('Erro ao cadastrar:', err);
        error.value = 'Ocorreu um erro ao tentar realizar o cadastro. Por favor, tente novamente.';
    } finally {
        isLoading.value = false;
    }
}
</script>

<style scoped>
input,
select,
textarea {
    background-color: #f9f9f9;
    color: #333;
}

.cadastro-page {
    padding: 2rem 0;
}

.cadastro-container {
    max-width: 768px;
    margin: 0 auto;
}

.cadastro-header {
    text-align: center;
    margin-bottom: 1.5rem;
}

.form-card {
    background-color: white;
    border-radius: 12px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
}

.card-title {
    position: relative;
    padding-bottom: 0.75rem;
    margin-bottom: 1rem;
    color: #333;
}

.card-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #48c774;
    border-radius: 3px;
}

.field {
    margin-bottom: 1rem;
}

.label {
    font-weight: 600;
    color: #363636;
    margin-bottom: 0.3rem;
}

.button.is-success {
    background-color: #48c774;
    transition: background-color 0.3s ease;
}

.button.is-success:hover {
    background-color: #3cbb67;
}

.login-link {
    text-align: center;
    margin-top: 1rem;
    font-size: 0.95rem;
}

.login-link a {
    margin-left: 0.5rem;
    color: #48c774;
    font-weight: 600;
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}

/* Estilo para campos com erro */
.input.is-danger,
.textarea.is-danger,
.select.is-danger select {
    border-color: #f14668;
}

.help.is-danger {
    color: #f14668;
}

/* Estilo para campos focados */
.input:focus,
.textarea:focus,
.select select:focus {
    border-color: #48c774;
    box-shadow: 0 0 0 0.125em rgba(72, 199, 116, 0.25);
}

/* Animação de fade para notificações */
.notification {
    animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Estilos compactos para a área de termos */
.compact-terms {
    font-size: 0.9rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: flex-start;
}

.compact-terms input[type="checkbox"] {
    margin-right: 0.5rem;
    margin-top: 0.2rem;
}

.compact-terms a {
    color: #48c774;
    font-weight: 600;
    text-decoration: none;
}

.compact-terms a:hover {
    text-decoration: underline;
}

.subtitle.is-5 {
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
}

/* Separador sutil */
.section-divider {
    margin: 0.75rem 0;
    height: 1px;
    background-color: #f0f0f0;
}

.checkboxes {
    color: #333;
}
</style>
