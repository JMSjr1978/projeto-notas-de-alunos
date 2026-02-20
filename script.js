// Variáveis globais
let lv_professor = '';
let lv_nome_aluno = '';
let lv_nota1 = 0;
let lv_nota2 = 0;
let lv_nota3 = 0;
let lv_nota4 = 0;
let lv_media_aluno = 0;
let lv_status = '';
let lv_turno = '';

// Função para gerar o boletim
function gerarBoletim(p_prof, p_aluno, p_1BIM, p_2BIM, p_3BIM, p_4BIM, turno) {
    // Atribuindo valores às variáveis
    lv_professor = p_prof;
    lv_nome_aluno = p_aluno;
    lv_nota1 = parseFloat(p_1BIM);
    lv_nota2 = parseFloat(p_2BIM);
    lv_nota3 = parseFloat(p_3BIM);
    lv_nota4 = parseFloat(p_4BIM);
    
    // Calculando a média
    lv_media_aluno = (lv_nota1 + lv_nota2 + lv_nota3 + lv_nota4) / 4;
    
    // Definindo o turno
    if (turno === 'manha') {
        lv_turno = 'MANHÃ';
    } else if (turno === 'tarde') {
        lv_turno = 'TARDE';
    } else if (turno === 'noite') {
        lv_turno = 'NOITE';
    }
    
    // Verificando status de aprovação
    if (lv_media_aluno >= 6) {
        lv_status = 'APROVADO!';
    } else {
        lv_status = 'REPROVADO!';
    }
    
    // Construindo o boletim em HTML
    let boletim = '';
    
    boletim += '#################################################################\n';
    boletim += '------ STRATEGY TECH ACADEMY ------ BOLETIM DO PROGRAMADOR ------\n';
    boletim += '#################################################################\n';
    boletim += '\n';
    boletim += 'PROFESSOR: ' + lv_professor + '\n';
    boletim += 'ALUNO PROGRAMADOR: ' + lv_nome_aluno + '\n';
    boletim += 'TURNO: ' + lv_turno + '\n';
    boletim += '\n';
    boletim += '#################################################################\n';
    boletim += '----------------------------- NOTAS -----------------------------\n';
    boletim += '#################################################################\n';
    boletim += '\n';
    boletim += '1º BIMESTRE: ' + lv_nota1.toFixed(2) + '\n';
    boletim += '2º BIMESTRE: ' + lv_nota2.toFixed(2) + '\n';
    boletim += '3º BIMESTRE: ' + lv_nota3.toFixed(2) + '\n';
    boletim += '4º BIMESTRE: ' + lv_nota4.toFixed(2) + '\n';
    boletim += '\n';
    boletim += 'MÉDIA DO ALUNO: ' + lv_media_aluno.toFixed(2) + '\n';
    boletim += 'STATUS: ' + lv_status + '\n';
    boletim += '\n';
    boletim += '\n';
    boletim += '####################################################################\n';
    boletim += '------- STRATEGY TECH ACADEMY ------- BOLETIM DO PROGRAMADOR -------\n';
    boletim += '####################################################################\n';
    
    if (lv_status === 'APROVADO!') {
        boletim += '#################################################################\n';
        boletim += '-------------------------- PARABÉNS --------------------------------\n';
        boletim += '####################################################################\n';
        boletim += 'Prezado(a) ' + lv_nome_aluno + ',\n';
        boletim += '\n';
        boletim += 'A Strategy Tech Academy  tem o prazer em  parabenizá-lo(a)  pela sua\n';
        boletim += 'APROVAÇÃO\n';
        boletim += '\n';
        boletim += 'Sua dedicação e empenho durante todo o ano letivo foram\n';
        boletim += '\n';
        boletim += 'fundamentais para alcançar este excelente resultado.\n';
        boletim += '\n';
        boletim += 'Continue assim!\n';
        boletim += '\n';
        boletim += 'A persistência é o caminho, o resultado é a vitória!\n';
        boletim += '\n';
        boletim += 'Desejamos muito sucesso em sua jornada de programador!\n';
    } else {
        boletim += 'NÃO DESISTA!\n';
        boletim += '\n';
        boletim += 'Prezado(a) ' + lv_nome_aluno + ',\n';
        boletim += 'A Strategy Tech Academy  acredita em seu potencial\n';
        boletim += '\n';
        boletim += 'Sabemos que este resultado não foi o esperado, mas\n';
        boletim += 'lembre-se: cada desafio é uma oportunidade de aprendizado.\n';
        boletim += '\n';
        boletim += 'Continue estudando e dedicando-se! Com esforço e\n';
        boletim += 'persistência, você certamente alcançará seus objetivos.\n';
        boletim += '\n';
        boletim += 'Não desanime! A persistência é o caminho, o resultado é a vitória!\n';
        boletim += '\n';
        boletim += 'Estamos aqui para apoiá-lo(a) em sua jornada!\n';
    }
    
    return boletim;
}

// Event listener para o formulário
document.getElementById('formBoletim').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Capturando os valores do formulário
    const professor = document.getElementById('professor').value;
    const aluno = document.getElementById('aluno').value;
    const nota1 = document.getElementById('nota1').value;
    const nota2 = document.getElementById('nota2').value;
    const nota3 = document.getElementById('nota3').value;
    const nota4 = document.getElementById('nota4').value;
    const turno = document.querySelector('input[name="turno"]:checked').value;
    
    // Gerando o boletim
    const boletimTexto = gerarBoletim(professor, aluno, nota1, nota2, nota3, nota4, turno);
    
    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.textContent = boletimTexto;
    resultadoDiv.classList.remove('hidden');
    
    // Adicionando classe de cor baseada no status
    if (lv_status === 'APROVADO!') {
        resultadoDiv.classList.add('aprovado');
        resultadoDiv.classList.remove('reprovado');
    } else {
        resultadoDiv.classList.add('reprovado');
        resultadoDiv.classList.remove('aprovado');
    }
    
    // Rolando até o resultado
    resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});