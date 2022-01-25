using BackEnd.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_WebApi_.Repos.OgrencilerRepo
{
    public interface IOgrencilerRepo
    {
        /*
         kaydet, düzenle(), Getir-Hepsi, Getir-TekKayıt
        thread-Task
         */

        Task<Ogrenci> Kaydet(Ogrenci obj);
        IMongoCollection<Ogrenci> Getir();
    }
}
