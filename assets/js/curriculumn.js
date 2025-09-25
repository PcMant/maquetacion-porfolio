addEventListener("DOMContentLoaded", (event) => {

    function  obtenerAno(fecha) {
        var  d = new  Date(fecha);
        var  n = d.getFullYear();
        return  n;
    }

  fetch('https://raw.githubusercontent.com/PcMant/ManfredPerfilJuanMolina/refs/heads/main/CV/MAC.json')
    .then(r => r.json())
    .then(data => {
        let d = data;
        let knowledge = d.knowledge;

        let resume__timelines = document.getElementsByClassName('resume__timelines');

        /* Experiencia */
        let experiencies = d.experience.jobs;

        let experienciesHTML = experiencies.map(exp =>`
            <article class="timelines__timeline">
                <header class="timeline__header">
                    <h4 class="timeline__year">${obtenerAno(exp.roles[0].startDate)+' - '+obtenerAno(exp.roles[0].finishDate)}</h4>
                    <span class="timeline__company">${exp.organization.name}</span>
                </header>

                <div class="timeline__divider"></div>

                <div class="timeline__description">
                    <h3 class="timeline__title">${exp.roles[0].name}</h3>
                    <p class="timeline__text">
                        ${exp.roles[0].challenges[0].description}
                    </p>
                </div>
            </article>
        `).join('');

        resume__timelines[0].insertAdjacentHTML('afterbegin', experienciesHTML);
         
       /* Estudios */
       let studies = knowledge.studies.filter(study => study.studyType == "officialDegree").sort((a, b) => new Date(b.startDate) - new Date(a.startDate));

       let studiesHTML = studies.map(s =>`
            <article class="timelines__timeline">
                <header class="timeline__header">
                    <h4 class="timeline__year">${obtenerAno(s.finishDate)}</h4>
                    <span class="timeline__company">${s.institution.name}</span>
                </header>

                <div class="timeline__divider"></div>

                <div class="timeline__description">
                    <h3 class="timeline__title">${s.name}</h3>
                    <p class="timeline__text">
                        
                    </p>
                </div>
            </article>
        `).join('');

        resume__timelines[1].insertAdjacentHTML('afterbegin', studiesHTML);
        
        /* Certificados */
        let certificates__container = document.querySelector('.certificates__container');
        let certificates = knowledge.studies.filter(study => study.studyType == "certification").sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
        
        let = certificatesHTML = certificates.map(cert => `
           <article class="certificates__certificate">
                <div class="certificate__logo">
                  <img src="${cert.institution.image.link}" alt="${cert.institution.image.alt}" />
                </div>

                <div class="certificate__content">
                  <h4 class="certificate__title">${cert.name}</h4>
                  <span class="certificate__date">${obtenerAno(cert.startDate)}</span>
                </div>
              </article> 
        `).join('');

        certificates__container.insertAdjacentHTML('afterbegin', certificatesHTML);
    })
    .catch(e => console.error(e));
});

   