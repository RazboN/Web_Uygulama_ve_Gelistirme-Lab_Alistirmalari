using BackEnd.Models;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_WebApi_.Repos.OgrencilerRepo
{
    public class Imp_OgrencilerRepo : IOgrencilerRepo
    {
        private readonly IMongoCollection<Ogrenci> _ogrencilerCollection;

        public Imp_OgrencilerRepo(IMongoDatabase mongoDb)
        {
            _ogrencilerCollection = mongoDb.GetCollection<Ogrenci>("Ogrenciler");
        }

        public IMongoCollection<Ogrenci> Getir()
        {
            return _ogrencilerCollection;
        }

        public async Task<Ogrenci> Kaydet(Ogrenci obj)
        {
            try
            {
                int sonOgrId = _ogrencilerCollection.AsQueryable().Count();
                obj.OGRID = sonOgrId + 1;
                await _ogrencilerCollection.InsertOneAsync(obj);
                return obj;
            }
            catch (Exception ex)
            {
                throw new Exception("Kayıt eklenirken hata oluştu. " + ex.Message);
            }
        }
    }
}
