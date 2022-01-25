using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Ogrenci
    {
        public ObjectId id { get; set; }
        public string OGRENCINO { get; set; }
        public string ADSOYAD { get; set; }
        public int VIZENOTU { get; set; }
        public int FINALNOTU { get; set; }
        public int OGRID { get; set; }
    }
}