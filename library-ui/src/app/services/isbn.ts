export default function isIsbnValid(isbn: string) {

    const cleanIsbn = isbn.replace(/\D/g,'');

    if (cleanIsbn.length == 13) {
        return check13(cleanIsbn);
    }else if(cleanIsbn.length == 10){
        return check10(cleanIsbn);
    }else{
      return false;
    }
}

function check13(isbn: string){

  const numerics: number[] = [];
  let result: number = 0;
  for (let i = 0; i < isbn.length; i++) {
      numerics[i] = parseInt(isbn[i], 10);
      if(i % 2 == 0){
          result += numerics[i] * 1;
      }else{
          result += numerics[i] * 3;
      }
  }

  result = (10-(result%10)) % 10;

  return result==0;

}

function check10(isbn: string){

  const numerics: number[] = [];
  let result: number = 0;
  let digit: number = 10;
  for(let i = 0; i< isbn.length;i++){
    numerics[i] = parseInt(isbn[i],10);
    result += digit * numerics[i];
    digit -=1;
  }

  result = (11-(result%11)) % 11;

  return result==0;

}
