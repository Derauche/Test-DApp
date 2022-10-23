

const nth_most_rate = (list,n) => {
    const tim = {};
    for (const number of list) {
      tim[number] = tim[number] ? tim[number] + 1 : 1;
    }
    
    const total = Object.entries(tim).sort((k, v) => k[1] - v[1]);
    const totalItems = total?.length
    const rarest = n > totalItems ? total[totalItems - 1][0] : n <= 0 ? total[0][0] : total[n - 1][0];
  
    return rarest; 
  }
  
  console.log(nth_most_rate([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5], 2)); 
