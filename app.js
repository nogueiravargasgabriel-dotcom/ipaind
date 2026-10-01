"use strict";

const STORAGE_KEY = "artes-indigenas-caderno-vivo";

const questions = [
  {
    id: 1,
    title: "O valor da arte",
    text: `
      Uma peça artesanal indígena, tradicionalmente utilizada em rituais, é
      adquirida por um colecionador e exposta em uma galeria de arte
      contemporânea, sendo descrita como “obra-prima da arte brasileira”.
      De acordo com a perspectiva de Stuart Hall sobre o campo cultural, qual
      afirmação é mais adequada?
    `,
    options: {
      A: "O valor artístico da peça é intrínseco e não se altera, independentemente do local de exposição.",
      B: "A mudança de contexto não afeta o significado da peça, apenas sua visibilidade.",
      C: "O reconhecimento como “obra-prima” é uma construção social que depende do campo cultural e dos discursos que o legitimam.",
      D: "A intenção do artista é o único fator determinante para seu valor e significado.",
      E: "A peça perde seu valor cultural ao ser retirada de seu contexto original."
    },
    answer: "C",
    explanation:
      "Para Stuart Hall, o significado e o valor de uma forma cultural são produzidos e disputados em campos sociais específicos. A circulação em uma galeria pode modificar sua posição e interpretação."
  },
  {
    id: 2,
    title: "Diversidade e “marco zero”",
    text: `
      O Censo 2022 do IBGE revelou a existência de 391 etnias e 295 línguas
      indígenas no Brasil. No entanto, é comum encontrar narrativas que tratam
      a arte indígena como um “marco zero” homogêneo da cultura brasileira.
      Qual é a principal crítica a essa visão?
    `,
    options: {
      A: "A crítica é inválida, pois a arte indígena naturalmente serve como ponto de partida para a arte nacional.",
      B: "Essa visão desconsidera a diversidade de povos, línguas e manifestações, reduzindo-as a uma origem única.",
      C: "O problema está apenas no fato de o número de etnias ser maior que o registrado.",
      D: "A arte indígena só pode ser marco zero quando utiliza materiais naturais.",
      E: "A visão é prejudicial porque impede a valorização da arte europeia no Brasil."
    },
    answer: "B",
    explanation:
      "A ideia de marco zero homogêneo ignora a pluralidade dos povos indígenas e transforma histórias diversas em uma origem única e simplificada."
  },
  {
    id: 3,
    title: "Apropriação cultural e grafismos",
    text: `
      Uma empresa de moda lança roupas com estampas inspiradas em grafismos
      indígenas, sem mencionar origem ou autoria e sem parceria com as
      comunidades. Qual cuidado é mais diretamente violado?
    `,
    options: {
      A: "Falar no plural, pois a empresa não reconhece a diversidade.",
      B: "Não congelar no passado, pois a empresa utiliza padrões antigos.",
      C: "Considerar a continuidade cultural, pois não valoriza as técnicas tradicionais.",
      D: "A apropriação cultural não se relaciona com os três cuidados.",
      E: "Considerar a continuidade cultural, pois o valor é disputado e a apropriação desconsidera autoria e contexto."
    },
    answer: "E",
    explanation:
      "A situação desconsidera autoria, origem e contexto. Grafismos possuem significados específicos e não devem ser tratados como elementos decorativos livres de relações culturais."
  },
  {
    id: 4,
    title: "Arte utilitária e estética",
    text: `
      As artes indígenas são frequentemente descritas como utilitárias,
      conjugando aspectos criativos e estéticos com usos práticos ou
      representativos. Qual é a implicação dessa característica?
    `,
    options: {
      A: "A arte indígena não possui valor estético, sendo apenas funcional.",
      B: "A beleza é secundária e não intencional.",
      C: "A dimensão estética não se separa da utilidade, da representação e do contexto social.",
      D: "Os artefatos não podem ser considerados arte.",
      E: "A arte indígena é inferior à arte ocidental."
    },
    answer: "C",
    explanation:
      "A dimensão estética pode estar profundamente integrada ao uso, aos rituais, ao cotidiano e à cosmovisão, desafiando a separação entre arte e função."
  },
  {
    id: 5,
    title: "Ancestralidade e transformação",
    text: `
      A ancestralidade é manifestada na transmissão de técnicas e
      conhecimentos entre gerações. Qual relação está correta?
    `,
    options: {
      A: "A ancestralidade exige repetição exata e impede inovação.",
      B: "A ancestralidade é uma relação ativa com conhecimentos herdados, que podem orientar novas produções.",
      C: "A arte ancestral deve ser idêntica a peças arqueológicas.",
      D: "A transmissão de técnicas prova que a arte está congelada.",
      E: "A ancestralidade é irrelevante para a arte contemporânea."
    },
    answer: "B",
    explanation:
      "A ancestralidade não representa imobilidade. Conhecimentos herdados podem ser reinterpretados e adaptados, mantendo a cultura viva."
  },
  {
    id: 6,
    title: "O papel de Jaider Esbell",
    text: `
      Jaider Esbell, artista Makuxi, é um exemplo de protagonismo indígena
      contemporâneo. Sua trajetória é importante para:
    `,
    options: {
      A: "Reforçar que a arte indígena é apenas tema para artistas não indígenas.",
      B: "Demonstrar que artistas indígenas precisam produzir no estilo ocidental.",
      C: "Mostrar que artistas indígenas são autores contemporâneos e produtores de discursos sobre suas experiências.",
      D: "Provar que a arte indígena é estática.",
      E: "Limitar a arte indígena ao aspecto ritual."
    },
    answer: "C",
    explanation:
      "Jaider Esbell ajuda a deslocar o olhar, evidenciando artistas indígenas como sujeitos, autores e produtores culturais contemporâneos."
  },
  {
    id: 7,
    title: "Interpretação de grafismos",
    text: `
      Ao observar um grafismo indígena com padrões simétricos e repetidos,
      um estudante conclui que ele serve apenas como decoração. Qual é a
      abordagem mais responsável?
    `,
    options: {
      A: "A conclusão está correta, pois simetria e repetição são puramente estéticas.",
      B: "Buscar um significado universal aplicável a todas as etnias.",
      C: "Investigar autoria, povo, contexto, usos e explicações da comunidade.",
      D: "Concluir que pessoas não indígenas não podem tentar compreendê-lo.",
      E: "Reproduzir o grafismo em outros contextos para popularizá-lo."
    },
    answer: "C",
    explanation:
      "Grafismos podem funcionar como sistemas de comunicação e possuir lógicas sociais específicas. A interpretação responsável exige contexto e respeito às explicações próprias."
  }
];

const baseMapNodes = [
  {
    id: "forma-campo-poder",
    label: "Forma, campo\ne poder",
    type: "base",
    group: "Conceitos"
  },
  {
    id: "diversidade",
    label: "Diversidade\nindígena",
    type: "base",
    group: "Conceitos"
  },
  {
    id: "ancestralidade",
    label: "Ancestralidade\ne transformação",
    type: "base",
    group: "Conceitos"
  },
  {
    id: "grafismos",
    label: "Grafismos como\nlinguagem social",
    type: "base",
    group: "Conceitos"
  },
  {
    id: "protagonismo",
    label: "Protagonismo\ncontemporâneo",
    type: "base",
    group: "Conceitos"
  }
];

const state = {
  notes: {},
  answers: {},
  quizFinished: false
};

document.addEventListener("DOMContentLoaded", initialize);

function initialize() {
  loadState();
  setupMenu();
  setupNotes();
  renderQuiz();
  setupActions();
  renderMindMap();
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (!saved) {
      return;
    }

    state.notes = saved.notes || {};
    state.answers = saved.answers || {};
    state.quizFinished = Boolean(saved.quizFinished);

    document.querySelectorAll(".note-field").forEach((field) => {
      const noteId = field.dataset.noteId;

      if (noteId && state.notes[noteId]) {
        field.value = state.notes[noteId];
      }
    });
  } catch (error) {
    console.warn("Não foi possível carregar os dados salvos.", error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      notes: state.notes,
      answers: state.answers,
      quizFinished: state.quizFinished
    })
  );
}

function setupMenu() {
  const menuButton = document.querySelector("#menu-button");
  const navigation = document.querySelector("#main-navigation");

  if (!menuButton || !navigation) {
    return;
  }

  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu"
    );
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menu");
    }
  });
}

function setupNotes() {
  document.querySelectorAll(".note-field").forEach((field) => {
    field.addEventListener("input", () => {
      const noteId = field.dataset.noteId;

      if (!noteId) {
        return;
      }

      state.notes[noteId] = field.value;
      saveState();
      showSaveStatus(field);
      renderMindMap();
    });
  });
}

function showSaveStatus(field) {
  const status =
    field.id === "general-notes"
      ? document.querySelector("#general-save-status")
      : createTemporaryStatus(field);

  if (!status) {
    return;
  }

  status.textContent = "Anotação salva neste navegador.";

  window.clearTimeout(field.saveStatusTimer);

  field.saveStatusTimer = window.setTimeout(() => {
    status.textContent = "Alterações salvas automaticamente.";
  }, 1400);
}

function createTemporaryStatus(field) {
  let status = field.parentElement.querySelector(".save-status");

  if (!status) {
    status = document.createElement("p");
    status.className = "save-status";
    field.insertAdjacentElement("afterend", status);
  }

  return status;
}

function renderQuiz() {
  const container = document.querySelector("#quiz-container");

  if (!container) {
    return;
  }

  container.innerHTML = questions
    .map((question) => {
      const selectedAnswer = state.answers[question.id];

      const options = Object.entries(question.options)
        .map(([letter, text]) => {
          const checked = selectedAnswer === letter ? "checked" : "";

          return `
            <li>
              <label class="option-label">
                <input
                  type="radio"
                  name="question-${question.id}"
                  value="${letter}"
                  data-question-id="${question.id}"
                  ${checked}
                >
                <span><strong>${letter})</strong> ${escapeHtml(text)}</span>
              </label>
            </li>
          `;
        })
        .join("");

      return `
        <article class="question-card" id="question-card-${question.id}">
          <h3>Questão ${question.id}: ${escapeHtml(question.title)}</h3>

          <p class="question-text">
            ${escapeHtml(question.text)}
          </p>

          <ul class="options-list">
            ${options}
          </ul>

          <label for="question-note-${question.id}">
            Minhas anotações sobre a questão ${question.id}
          </label>

          <textarea
            id="question-note-${question.id}"
            class="note-field question-note"
            data-note-id="question-${question.id}"
            rows="4"
            placeholder="Registre sua justificativa, dúvida ou estratégia..."
          >${escapeHtml(state.notes[`question-${question.id}`] || "")}</textarea>

          <div
            class="question-feedback"
            id="feedback-${question.id}"
            hidden
          ></div>
        </article>
      `;
    })
    .join("");

  container.querySelectorAll('input[type="radio"]').forEach((input) => {
    input.addEventListener("change", () => {
      state.answers[input.dataset.questionId] = input.value;
      state.quizFinished = false;
      saveState();
      renderMindMap();
    });
  });

  container.querySelectorAll(".question-note").forEach((textarea) => {
    textarea.addEventListener("input", () => {
      state.notes[textarea.dataset.noteId] = textarea.value;
      saveState();
      showSaveStatus(textarea);
      renderMindMap();
    });
  });

  if (state.quizFinished) {
    showCorrections();
  }
}

function finishQuiz() {
  const unanswered = questions.filter(
    (question) => !state.answers[question.id]
  );

  state.quizFinished = true;
  saveState();
  showCorrections();

  if (unanswered.length > 0) {
    showQuizResult(
      `Você respondeu ${questions.length - unanswered.length} de ${questions.length} questões. As questões não respondidas continuam disponíveis para revisão.`
    );
  }

  renderMindMap();
}

function showCorrections() {
  let score = 0;

  questions.forEach((question) => {
    const card = document.querySelector(`#question-card-${question.id}`);
    const feedback = document.querySelector(`#feedback-${question.id}`);
    const selected = state.answers[question.id];

    if (!card || !feedback) {
      return;
    }

    card.classList.remove("is-correct", "is-wrong");

    if (!selected) {
      feedback.hidden = false;
      feedback.innerHTML = `
        <strong>Questão não respondida.</strong>
        <p>A resposta correta é ${question.answer}. ${escapeHtml(
          question.explanation
        )}</p>
      `;
      card.classList.add("is-wrong");
      return;
    }

    const isCorrect = selected === question.answer;

    if (isCorrect) {
      score += 1;
      card.classList.add("is-correct");
    } else {
      card.classList.add("is-wrong");
    }

    feedback.hidden = false;
    feedback.innerHTML = `
      <strong>${isCorrect ? "Resposta correta!" : "Resposta para revisar."}</strong>
      <p>
        Você marcou <strong>${selected}</strong>.
        A alternativa correta é <strong>${question.answer}</strong>.
      </p>
      <p>${escapeHtml(question.explanation)}</p>
    `;
  });

  showQuizResult(
    `Resultado: ${score} de ${questions.length} questões corretas.`
  );
}

function showQuizResult(message) {
  const result = document.querySelector("#quiz-result");

  if (!result) {
    return;
  }

  result.hidden = false;
  result.textContent = message;
}

function resetQuiz() {
  const shouldReset = window.confirm(
    "Deseja realmente limpar as respostas e as correções?"
  );

  if (!shouldReset) {
    return;
  }

  state.answers = {};
  state.quizFinished = false;
  saveState();

  renderQuiz();

  const result = document.querySelector("#quiz-result");

  if (result) {
    result.hidden = true;
    result.textContent = "";
  }

  renderMindMap();
}

function setupActions() {
  document.querySelector("#finish-quiz")?.addEventListener("click", finishQuiz);
  document.querySelector("#reset-quiz")?.addEventListener("click", resetQuiz);

  document
    .querySelector("#generate-summary")
    ?.addEventListener("click", () => {
      renderSummary();
      renderMindMap();

      document.querySelector("#resultado")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });

  document
    .querySelector("#print-page")
    ?.addEventListener("click", () => window.print());

  document
    .querySelector("#copy-notes")
    ?.addEventListener("click", copyNotes);

  document
    .querySelector("#share-whatsapp")
    ?.addEventListener("click", shareWhatsapp);

  document
    .querySelector("#send-email")
    ?.addEventListener("click", sendEmail);

  document
    .querySelector("#close-dialog")
    ?.addEventListener("click", closeDialog);

  document.querySelector("#map-dialog")?.addEventListener("click", (event) => {
    const dialog = document.querySelector("#map-dialog");

    if (event.target === dialog) {
      closeDialog();
    }
  });
}

function renderSummary() {
  const target = document.querySelector("#summary-content");

  if (!target) {
    return;
  }

  const notes = getFilledNotes();
  const score = getScore();
  const reviewQuestions = getReviewQuestions();

  const notesHtml =
    notes.length > 0
      ? `
        <div class="summary-item">
          <strong>Você registrou ${notes.length} anotação(ões).</strong>
          <p>
            Seu material reúne observações próprias sobre os conceitos estudados.
          </p>
        </div>
      `
      : `
        <div class="summary-item">
          <strong>Ainda não há anotações preenchidas.</strong>
          <p>
            Escreva nos boxes do caderno para incluir suas ideias no resumo e no mapa.
          </p>
        </div>
      `;

  const scoreHtml = `
    <div class="summary-item">
      <strong>Desempenho no desafio:</strong>
      <p>
        ${score.correct} de ${questions.length} questões corretas.
        ${getPerformanceMessage(score.correct)}
      </p>
    </div>
  `;

  const reviewHtml =
    reviewQuestions.length > 0
      ? `
        <div class="summary-item">
          <strong>Conteúdos para revisar:</strong>
          <p>${reviewQuestions
            .map(
              (question) =>
                `Questão ${question.id}: ${escapeHtml(question.title)}`
            )
            .join("<br>")}</p>
        </div>
      `
      : `
        <div class="summary-item">
          <strong>Revisão:</strong>
          <p>Responda às questões para receber indicações personalizadas.</p>
        </div>
      `;

  target.innerHTML = `
    ${notesHtml}
    ${scoreHtml}
    ${reviewHtml}

    <div class="summary-item">
      <strong>Síntese conceitual:</strong>
      <p>
        As artes indígenas devem ser compreendidas no plural, considerando
        diferentes povos, contextos, autorias e formas de circulação.
        A ancestralidade não impede a transformação, e os grafismos podem
        comunicar valores, memórias e relações sociais. A análise crítica
        também deve observar os discursos e as relações de poder que
        atribuem valor às produções culturais.
      </p>
    </div>
  `;
}

function getFilledNotes() {
  return Object.entries(state.notes).filter(
    ([, text]) => typeof text === "string" && text.trim().length > 0
  );
}

function getScore() {
  let correct = 0;

  questions.forEach((question) => {
    if (state.answers[question.id] === question.answer) {
      correct += 1;
    }
  });

  return {
    correct,
    total: questions.length
  };
}

function getReviewQuestions() {
  return questions.filter(
    (question) => state.answers[question.id] !== question.answer
  );
}

function getPerformanceMessage(score) {
  if (score === questions.length) {
    return "Excelente domínio dos conceitos.";
  }

  if (score >= 5) {
    return "Bom desempenho. Revise os pontos indicados no mapa.";
  }

  if (score >= 3) {
    return "Você já possui uma base. Continue revisando as questões incorretas.";
  }

  return "Use as explicações e anotações para reconstruir os conceitos principais.";
}

function buildPersonalNodes() {
  const nodes = [];

  const sectionNotes = getFilledNotes().filter(
    ([id]) => !id.startsWith("question-") && id !== "general"
  );

  sectionNotes.forEach(([id, text]) => {
    nodes.push({
      id: `note-${id}`,
      label: `${getNoteTitle(id)}\n${shortenText(text, 30)}`,
      type: "note",
      fullText: text
    });
  });

  const generalNote = state.notes.general?.trim();

  if (generalNote) {
    nodes.push({
      id: "note-general",
      label: `Anotações gerais\n${shortenText(generalNote, 32)}`,
      type: "note",
      fullText: generalNote
    });
  }

  questions.forEach((question) => {
    const answer = state.answers[question.id];

    if (!answer) {
      return;
    }

    const isCorrect = answer === question.answer;

    nodes.push({
      id: `question-${question.id}`,
      label: `Questão ${question.id}\n${isCorrect ? "Acerto" : "Revisar"}`,
      type: isCorrect ? "correct" : "review",
      fullText: isCorrect
        ? `Você marcou a alternativa ${answer}, que está correta.`
        : `Você marcou a alternativa ${answer}. A resposta correta é ${question.answer}. ${question.explanation}`
    });
  });

  return nodes;
}

function getNoteTitle(id) {
  const titles = {
    introducao: "Introdução",
    "stuart-hall": "Stuart Hall",
    diversidade: "Diversidade",
    cuidados: "Três cuidados",
    grafismos: "Grafismos",
    protagonismo: "Protagonismo",
    aplicacao: "Aplicação"
  };

  return titles[id] || "Anotação";
}

function renderMindMap() {
  const svg = document.querySelector("#mind-map");
  const accessibleList = document.querySelector("#map-accessible-list");

  if (!svg || !accessibleList) {
    return;
  }

  svg.innerHTML = "";

  const personalNodes = buildPersonalNodes();
  const nodes = [...baseMapNodes, ...personalNodes];

  const center = {
    x: 550,
    y: 340,
    radius: 92,
    id: "root",
    label: "Artes indígenas\nbrasileiras",
    type: "root"
  };

  const positionedNodes = positionNodes(nodes);

  drawLinkLines(svg, center, positionedNodes);
  drawMapNode(svg, center);
  positionedNodes.forEach((node) => drawMapNode(svg, node));

  accessibleList.innerHTML = `
    <h4>Versão textual do mapa</h4>
    <p><strong>Artes indígenas brasileiras</strong></p>
    <ul>
      ${nodes
        .map(
          (node) =>
            `<li><strong>${escapeHtml(node.label.replace("\n", " — "))}</strong>${
              node.fullText
                ? `: ${escapeHtml(shortenText(node.fullText, 150))}`
                : ""
            }</li>`
        )
        .join("")}
    </ul>
  `;
}

function positionNodes(nodes) {
  const positioned = [];

  const baseNodes = nodes.filter((node) => node.type === "base");
  const personalNodes = nodes.filter((node) => node.type !== "base");

  baseNodes.forEach((node, index) => {
    const angle = -Math.PI / 2 + index * ((Math.PI * 2) / baseNodes.length);

    positioned.push({
      ...node,
      x: 550 + Math.cos(angle) * 230,
      y: 340 + Math.sin(angle) * 230,
      radius: 65
    });
  });

  const personalColumns = [
    { x: 120, startY: 110 },
    { x: 980, startY: 110 }
  ];

  personalNodes.forEach((node, index) => {
    const column = personalColumns[index % personalColumns.length];
    const row = Math.floor(index / personalColumns.length);

    positioned.push({
      ...node,
      x: column.x,
      y: column.startY + row * 105,
      radius: 52
    });
  });

  return positioned;
}

function drawLinkLines(svg, center, nodes) {
  nodes.forEach((node) => {
    const line = createSvgElement("line", {
      x1: center.x,
      y1: center.y,
      x2: node.x,
      y2: node.y,
      class: "map-link"
    });

    svg.appendChild(line);
  });
}

function drawMapNode(svg, node) {
  const group = createSvgElement("g", {
    class: `map-node ${node.type}`,
    tabindex: "0",
    role: "button",
    "aria-label": node.label.replace("\n", " — ")
  });

  const circle = createSvgElement("circle", {
    cx: node.x,
    cy: node.y,
    r: node.radius
  });

  group.appendChild(circle);

  const lines = node.label.split("\n");

  lines.forEach((line, index) => {
    const text = createSvgElement("text", {
      x: node.x,
      y: node.y + (index - (lines.length - 1) / 2) * 17
    });

    text.textContent = line;
    group.appendChild(text);
  });

  group.addEventListener("click", () => {
    if (node.fullText) {
      openDialog(node.label.replace("\n", " "), node.fullText);
    }
  });

  group.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();

      if (node.fullText) {
        openDialog(node.label.replace("\n", " "), node.fullText);
      }
    }
  });

  svg.appendChild(group);
}

function createSvgElement(tag, attributes) {
  const element = document.createElementNS(
    "http://www.w3.org/2000/svg",
    tag
  );

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function openDialog(title, content) {
  const dialog = document.querySelector("#map-dialog");
  const dialogTitle = document.querySelector("#dialog-title");
  const dialogContent = document.querySelector("#dialog-content");

  if (!dialog || !dialogTitle || !dialogContent) {
    return;
  }

  dialogTitle.textContent = title;
  dialogContent.textContent = content;

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog() {
  const dialog = document.querySelector("#map-dialog");

  if (!dialog) {
    return;
  }

  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

async function copyNotes() {
  const text = createPlainTextSummary();

  try {
    await navigator.clipboard.writeText(text);
    window.alert("Anotações copiadas para a área de transferência.");
  } catch (error) {
    window.alert(
      "Não foi possível copiar automaticamente. Tente selecionar e copiar o conteúdo manualmente."
    );
  }
}

function shareWhatsapp() {
  const text = encodeURIComponent(createPlainTextSummary());
  const url = `https://wa.me/?text=${text}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function sendEmail() {
  const subject = encodeURIComponent(
    "Meu estudo sobre artes indígenas brasileiras"
  );

  const body = encodeURIComponent(createPlainTextSummary());

  window.location.href = `mailto:?subject=${subject}&body=${body}`;
}

function createPlainTextSummary() {
  const score = getScore();
  const notes = getFilledNotes();

  const noteText =
    notes.length > 0
      ? notes
          .map(([id, text]) => `${getNoteTitle(id)}:\n${text}`)
          .join("\n\n")
      : "Nenhuma anotação preenchida.";

  return `ARTES INDÍGENAS BRASILEIRAS

Desempenho: ${score.correct} de ${score.total} questões corretas.

ANOTAÇÕES:
${noteText}

SÍNTESE:
As artes indígenas devem ser compreendidas no plural, considerando diferentes povos, autorias, contextos e formas de circulação. A ancestralidade não impede a transformação, e os grafismos podem comunicar valores, memórias e relações sociais.`;
}

function shortenText(text, maxLength) {
  const cleanText = text.replace(/\s+/g, " ").trim();

  if (cleanText.length <= maxLength) {
    return cleanText;
  }

  return `${cleanText.slice(0, maxLength - 1)}…`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&")
    .replaceAll("<", "<")
    .replaceAll(">", ">")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}