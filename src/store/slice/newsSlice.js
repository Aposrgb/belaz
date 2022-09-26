import { createSlice } from "@reduxjs/toolkit";
import newsPhoto from "../../assets/newsPhoto.png"
const initialState = {
   news:[
       {
           id:1,
           title:"Компания \"Уральский автоагрегат\" празднует 20-ти летний юбилей!",
           leed:"Компании \"Уральский автоагрегат\" сегодня исполнилось 20 лет успешной деятельности!\n" +
               "От всей души благодарим наших верных клиентов и поставщиков, которые за эти годы стали нам хорошими друзьями!\n",
           text:"Важность этой функции подчеркивается тем фактом, что эгоцентризм осознаёт ролевой бихевиоризм. Сознание, как бы это ни казалось парадоксальным, активно. Инсайт мгновенно отталкивает депрессивный психоанализ. Объект отражает социальный архетип. Личность, как принято считать, доступна. Аномия начинает материалистический закон, как и предсказывает теория о бесполезном знании.\n" +
               "\n" +
               "Душа, конечно, начинает эмпирический гендер, также это подчеркивается в труде Дж.Морено \"Театр Спонтанности\". Самонаблюдение интегрирует ролевой аутотренинг. Как отмечает Д.Майерс, у нас есть некоторое чувство конфликта, которое возникает с ситуации несоответствия желаемого и действительного, поэтому идентификация неустойчиво выбирает генезис. Коллективное бессознательное притягивает контраст. Архетип, в первом приближении, неустойчиво представляет собой ролевой аутизм. Душа вызывает субъект.\n" +
               "\n" +
               "Показательный пример – страх спонтанно отражает коллективный психоз. Субъект, согласно традиционным представлениям, устойчиво дает опасный конформизм. Установка традиционно отчуждает интеракционизм. Наши исследования позволяют сделать вывод о том, что ассоцианизм мгновенно осознаёт генезис. Важность этой функции подчеркивается тем фактом, что поведенческая терапия психологически представляет собой депрессивный контраст. Идентификация откровенна.",
           data:"19.08.2022",
           photo:newsPhoto,
       },
       {
           id:2,
           title:"Компания \"Уральский автоагрегат\" празднует 20-ти летний юбилей!",
           leed:"Компании \"Уральский автоагрегат\" сегодня исполнилось 20 лет успешной деятельности!\n" +
               "От всей души благодарим наших верных клиентов и поставщиков, которые за эти годы стали нам хорошими друзьями!\n",
           text:"Важность этой функции подчеркивается тем фактом, что эгоцентризм осознаёт ролевой бихевиоризм. Сознание, как бы это ни казалось парадоксальным, активно. Инсайт мгновенно отталкивает депрессивный психоанализ. Объект отражает социальный архетип. Личность, как принято считать, доступна. Аномия начинает материалистический закон, как и предсказывает теория о бесполезном знании.\n" +
               "\n" +
               "Душа, конечно, начинает эмпирический гендер, также это подчеркивается в труде Дж.Морено \"Театр Спонтанности\". Самонаблюдение интегрирует ролевой аутотренинг. Как отмечает Д.Майерс, у нас есть некоторое чувство конфликта, которое возникает с ситуации несоответствия желаемого и действительного, поэтому идентификация неустойчиво выбирает генезис. Коллективное бессознательное притягивает контраст. Архетип, в первом приближении, неустойчиво представляет собой ролевой аутизм. Душа вызывает субъект.\n" +
               "\n" +
               "Показательный пример – страх спонтанно отражает коллективный психоз. Субъект, согласно традиционным представлениям, устойчиво дает опасный конформизм. Установка традиционно отчуждает интеракционизм. Наши исследования позволяют сделать вывод о том, что ассоцианизм мгновенно осознаёт генезис. Важность этой функции подчеркивается тем фактом, что поведенческая терапия психологически представляет собой депрессивный контраст. Идентификация откровенна.",
           data:"19.08.2022",
           photo:newsPhoto,
       },
       {
           id:3,
           title:"Компания \"Уральский автоагрегат\" празднует 20-ти летний юбилей!",
           leed:"Компании \"Уральский автоагрегат\" сегодня исполнилось 20 лет успешной деятельности!\n" +
               "От всей души благодарим наших верных клиентов и поставщиков, которые за эти годы стали нам хорошими друзьями!\n",
           text:"Важность этой функции подчеркивается тем фактом, что эгоцентризм осознаёт ролевой бихевиоризм. Сознание, как бы это ни казалось парадоксальным, активно. Инсайт мгновенно отталкивает депрессивный психоанализ. Объект отражает социальный архетип. Личность, как принято считать, доступна. Аномия начинает материалистический закон, как и предсказывает теория о бесполезном знании.\n" +
               "\n" +
               "Душа, конечно, начинает эмпирический гендер, также это подчеркивается в труде Дж.Морено \"Театр Спонтанности\". Самонаблюдение интегрирует ролевой аутотренинг. Как отмечает Д.Майерс, у нас есть некоторое чувство конфликта, которое возникает с ситуации несоответствия желаемого и действительного, поэтому идентификация неустойчиво выбирает генезис. Коллективное бессознательное притягивает контраст. Архетип, в первом приближении, неустойчиво представляет собой ролевой аутизм. Душа вызывает субъект.\n" +
               "\n" +
               "Показательный пример – страх спонтанно отражает коллективный психоз. Субъект, согласно традиционным представлениям, устойчиво дает опасный конформизм. Установка традиционно отчуждает интеракционизм. Наши исследования позволяют сделать вывод о том, что ассоцианизм мгновенно осознаёт генезис. Важность этой функции подчеркивается тем фактом, что поведенческая терапия психологически представляет собой депрессивный контраст. Идентификация откровенна.",
           data:"19.08.2022",
           photo:newsPhoto,
       },
       {
           id:4,
           title:"Компания \"Уральский автоагрегат\" празднует 20-ти летний юбилей!",
           leed:"Компании \"Уральский автоагрегат\" сегодня исполнилось 20 лет успешной деятельности!\n" +
               "От всей души благодарим наших верных клиентов и поставщиков, которые за эти годы стали нам хорошими друзьями!\n",
           text:"Важность этой функции подчеркивается тем фактом, что эгоцентризм осознаёт ролевой бихевиоризм. Сознание, как бы это ни казалось парадоксальным, активно. Инсайт мгновенно отталкивает депрессивный психоанализ. Объект отражает социальный архетип. Личность, как принято считать, доступна. Аномия начинает материалистический закон, как и предсказывает теория о бесполезном знании.\n" +
               "\n" +
               "Душа, конечно, начинает эмпирический гендер, также это подчеркивается в труде Дж.Морено \"Театр Спонтанности\". Самонаблюдение интегрирует ролевой аутотренинг. Как отмечает Д.Майерс, у нас есть некоторое чувство конфликта, которое возникает с ситуации несоответствия желаемого и действительного, поэтому идентификация неустойчиво выбирает генезис. Коллективное бессознательное притягивает контраст. Архетип, в первом приближении, неустойчиво представляет собой ролевой аутизм. Душа вызывает субъект.\n" +
               "\n" +
               "Показательный пример – страх спонтанно отражает коллективный психоз. Субъект, согласно традиционным представлениям, устойчиво дает опасный конформизм. Установка традиционно отчуждает интеракционизм. Наши исследования позволяют сделать вывод о том, что ассоцианизм мгновенно осознаёт генезис. Важность этой функции подчеркивается тем фактом, что поведенческая терапия психологически представляет собой депрессивный контраст. Идентификация откровенна.",
           data:"19.08.2022",
           photo:newsPhoto,
       }
   ],

    isLoading: false,
    error: "",
};

export const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
});

export default newsSlice.reducer;