function isPrimeNum(n)
{
      if(n == 1 || n == 0) return false;
      for(var i = 2; i < n; i++)
      {
        if(n % i == 0) return false;
      }
      return true;
}

for(var i = 1; i <= 100; i++)
  {
      if(isPrimeNum(i)) {
        console.log(i);
      }
}