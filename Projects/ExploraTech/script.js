const cardContainer = document.querySelector(".card-container");

const openDialog = (index) => {
  const dialog = document.querySelector(`.dialog-${index}`);
  document.body.classList.add('dialog-open');
  dialog.showModal();
};

const closeDialog = (index) => {
  const dialog = document.querySelector(`.dialog-${index}`);
  document.body.classList.remove('dialog-open');
  dialog.close();
}

const populateProjectCards = async () => {
  const response = await fetch("./projects.json");
  const projects = await response.json();
  cardContainer.innerHTML = Array.from(projects)
    .map((project, index) => {
      return `
      <div class="card">
        <span><h3>${project.title.slice(0, 60)}</h3>
        <small>${project.outcome}</small></span>
        <p>Skills: ${project.skills}</p>
        <button onclick="openDialog(${index})">View details</button>
        <dialog class="dialog-${index}">
          <div class="card">
            <h3>${project.title.slice(0, 60)}</h3>
            <b>Skills: ${project.skills}</b>
            <u>Objectives</u>
            <p>${project.objective}</p>
          </div>
          <button class="close" onclick="closeDialog(${index})">Close</button>
        </dialog>
      </div>`;
    })
    .join("");
};

populateProjectCards();
