  // временный костыль для отображения текста, а не номеров, пока нет бэка
  // вынес отдельн - использую в разных компонентах
  //* arr - массив из place
  //* arrConst - массив из constant.ts
  // отображаем только то, что кликнул поставщик
export const temporaryComponent = (arr:number[], arrConst:(number | string)[][]) => (
    arr?.map((check, i) => {
        
        let newName = arrConst.find(item => item.includes(check))?.slice(-1)
        
        return(
            <span className="px-2" key={i} >
                {newName}
            </span>
        )})
    )