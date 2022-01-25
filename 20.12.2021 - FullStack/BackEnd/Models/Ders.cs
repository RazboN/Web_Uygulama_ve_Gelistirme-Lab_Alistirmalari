using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Ders
    {
        public string DERSKODU { get; set; }
        public string DERSADI { get; set; }

        //collection framework List, ArrayList, Tuple, Set, HashMap,

        public List<Ogrenci> OGRENCILER { get; set; }
    }
}
