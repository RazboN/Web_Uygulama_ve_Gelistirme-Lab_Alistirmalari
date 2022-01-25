using BackEnd.Models;
using BackEnd_WebApi_.Repos.OgrencilerRepo;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd_WebApi_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OgrencilerController : ControllerBase
    {
        private readonly IOgrencilerRepo _ogrencilerRepo;

        public OgrencilerController(IOgrencilerRepo ogrencilerRepo)
        {
            _ogrencilerRepo = ogrencilerRepo;
        }

        [HttpGet]
        public JsonResult OgrencileriAl()
        {
            var ogrListesi = _ogrencilerRepo.Getir().AsQueryable();
            return new JsonResult(ogrListesi);
        }

        [HttpGet("{ogrId}")]
        public JsonResult OgrencileriAl(int ogrId)
        {
            return null;
        }

        [HttpPost]
        public JsonResult OgrenciEkle(Ogrenci p_yeniOgr)
        {
            Ogrenci retVal = _ogrencilerRepo.Kaydet(p_yeniOgr).Result;

            return new JsonResult(retVal);
        }
    }
}
