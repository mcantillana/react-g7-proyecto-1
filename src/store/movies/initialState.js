export const initialState = {
    movies: [
        {id: 'e10adc3949ba59abbe56e057f20f883e', name: 'El rey león', year: 2019, gender: 'Infantil', clasification: 'ATP', director: 'Jon Favreau'}
    ]
};


export const genders = [
  'Acción',
  'Anime',
  'Documentales',
  'Dramas',
  'Comedias',
  'Infantil',
  'Terror',
  'Musicales',
  'Romance',
  'Otro',
]

/* Generate years for select input. */
export const years = () => {
  const current_year = new Date().getFullYear();
  const _years = []
  for(let i=1960;i<=current_year;i++) {
      _years.push({name: i, value: i})
  }
        return _years;
}

export const clasifications = [
  {value: 'ATP', name:'Apto para todo el público (ATP)'},
  {value: '+13', name:'Apta para mayores de 13 años (+13)'},
  {value: '+16', name:'Apta para mayores de 16 años (+16)'},
  {value: '+18', name:'Apta para mayores de 18 años (+18)'},
  {value: 'C', name:'Exhibición condicionada (C)'},
]
