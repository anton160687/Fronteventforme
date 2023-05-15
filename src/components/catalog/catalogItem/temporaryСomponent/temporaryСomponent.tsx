
// Думаю, что временный костыль для отображения текста, а не сокращенй
// использую в нескольких компонентах - поэтому вынес
//* arr - массив из place
//* arrConst - массив из constant.ts

export const temporaryComponent = (arr:string[], arrConst:string[][]) => (
  arr?.map((check, i) => {
    
    let newName = arrConst.find(item => item.includes(check))?.slice(-1)

    return(
    <span className="d-flex justify-content-end" key={i} >
      {newName}
    </span>
    )
  })
)