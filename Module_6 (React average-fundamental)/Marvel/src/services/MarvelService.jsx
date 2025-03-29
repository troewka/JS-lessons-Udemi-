import { useHttp } from "../hooks/http.hook";
// класовий компонен по запитам на сервер
const useMarvelService = () => {
   const {loading, error, request, clearError} = useHttp();

   const _baseUrl = 'https://marvel-server-zeta.vercel.app/';
   const _baseKey = 'apikey=d4eecb0c66dedbfae4eab45d312fc1df';
   const _baseOffset = 4;
   // метод який відправляє запит на сервер, якщо все ОК то повертає дані
   // getResource = async (url) => {
   //    const res = await fetch(url);
   //    if(!res.ok) {
   //       throw new Error(`Could fetch to ${url}, status: ${res.status}`)
   //    }
   //    return await res.json();
   // }
   // метод по запиту на сервер для всіх персонажів
   const getAllСharacters = async (offset = _baseOffset) => {
      const res = await request(`${_baseUrl}characters?limit=6&offset=${offset}&${_baseKey}`);
      return res.data.results.map(_transformCharacter)
   }
   // метод по запиту на сервер для одного персонажа
   const getСharacter = async (id) => {
      const res =  await request(`${_baseUrl}characters/${id}?${_baseKey}`);
      return _transformCharacter(res.data.results[0]); // повертаємо об'єкт з сформованими даними які прийшли з сервера
   }

   const getAllComics = async (offset = _baseOffset) => {
      const res = await request(`${_baseUrl}comics?limit=4&offset=${offset}&${_baseKey}`);
      return res.data.results.map(_transformComics);
   }

   const getComics = async (id) => {
      const res =  await request(`${_baseUrl}comics/${id}?${_baseKey}`);
      return _transformComics(res.data.results[0])
   }

   // метод який формує з якими необхідними даними повинен бути об'єкт
   const _transformCharacter = (char) => {
      return {
         id: char.id,
         name: char.name,
         descr: char.description ? `${char.description.slice(0, 220)}...` : 'Description is not a found. Sorry', // робимо умову
         thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
         detail: char.urls[0].url[1],
         wiki: char.urls[1].url[1],
         comics: char.comics.items
      }
   }

   const _transformComics = (comics) => {
      return {
         id: comics.id,
         title: comics.title,
         descr: comics.description,
         pageCount: comics.pageCount,
         thumbhail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
         language: comics.textObjects.languages,
         price: comics.prices ? `${comics.prices[0].price}$` : 'Not costs'
      }
   }

   return {
      loading, 
      error, 
      clearError, 
      getAllСharacters, 
      getСharacter,
      getAllComics,
      getComics
   }
}

export default useMarvelService;
