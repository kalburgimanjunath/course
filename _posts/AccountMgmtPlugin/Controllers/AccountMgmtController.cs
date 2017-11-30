using MaxproCloud.UI.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using USP.WebUI.Entities;
using USP.WebUI.ServiceInterface;
using USP.WebUI.Services;
using WebUI.Framework.Common.Model;
using WebUI.Framework.Mvc;

namespace AccountMgmtPlugin.Controllers
{
    public class AccountMgmtController : AnonymousBaseController
    {
        private IAccountDataService _AccountDataService;
        private IUserDataService _usrDataService;

        [CustomDependency("AccountMgmt")]
        public IAccountDataService AccountDataService
        {
            get
            {
                if (_AccountDataService == null)
                {
                    _AccountDataService = RepositoryFactory.Instance.CreateRepository<IAccountDataService>();
                }
                return _AccountDataService;
            }
            set { _AccountDataService = value; }
        }

        [CustomDependency("AccountMgmt")]
        public IUserDataService UserDataService
        {
            get
            {
                if (_usrDataService == null)
                {
                    _usrDataService = RepositoryFactory.Instance.CreateRepository<IUserDataService>();
                }
                return _usrDataService;
            }
            set { _usrDataService = value; }
        }

        // GET: AccountMgmt
        public ActionResult Index()
        {
            return PartialView("_AccountMgmtMainPartial");
        }

        [HttpPost]
        [NoCache]
        public async Task<ActionResult> GetAccountInfo()
        {
            var dealerId = string.Empty;
            try
            {
                var accounts = await AccountDataService.GetEntities();
                if (accounts != null && accounts.Any())
                {
                    dealerId = accounts.First().Id;
                }
                var customers = await AccountDataService.GetChildAccounts(dealerId, false, AccountTypes.CUSTOMER);
                if (customers != null && customers.Any())
                {
                    var sites = await AccountDataService.GetChildAccounts(customers.Last().Id, false, AccountTypes.SITE);
                    if (sites != null && sites.Any())
                    {
                        return Json(new { success = true, data = sites.LastOrDefault() }, JsonRequestBehavior.AllowGet);
                    }
                    return Json(new { success = true }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.DB_NO_VALID_RECORDS }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.General_error });
            }
        }



        /// <summary>
        /// To fetech dealerid
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [NoCache]
        public async Task<ActionResult> GetDealerId()
        {
            var dealerId = string.Empty;
            try
            {
                var accounts = await AccountDataService.GetEntities();
                if (accounts != null && accounts.Count() > 0)
                {
                    dealerId = accounts.Where(p => p.EntityType == "Dealer").First().Id;
                }

                if (accounts != null && accounts.Count() > 0)
                {
                    return Json(new { success = true, data = dealerId }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.DB_NO_VALID_RECORDS }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.General_error });
            }
        }

        [HttpPost]
        [NoCache]
        public async Task<JsonResult> GetSiteDetail(string siteId)
        {
            try
            {
                var siteDetail = await AccountDataService.GetSiteDetail(siteId);
                if (siteDetail != null)
                {
                    return Json(new { success = true, data = siteDetail }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.DB_NO_VALID_RECORDS }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.General_error });
            }
        }

        [HttpPost]
        [NoCache]
        public async Task<JsonResult> GetCustomerDetail(string dealerId, int? startIndex, int? maxRecordCount)
        {
            try
            {

                var siteDetail = await AccountDataService.GetCustomerDetail(dealerId, startIndex, maxRecordCount);
                return Json(new { success = true, data = siteDetail }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.General_error });
            }
        }

        [HttpPost]
        public async Task<JsonResult> SaveSiteDetail(SiteDetailEntity siteDetail)
        {
            ResponseDataModel resultData = null;

            try
            {
                resultData = await AccountDataService.SaveSiteDetail(siteDetail);
                if (resultData.Result.StatusCode == UIStatusCode.CREATESUCESS)
                {
                    return Json(new { success = true, errorMessage = resultData.Result.StatusString }, JsonRequestBehavior.AllowGet);
                }
                return Json(new { success = false, errorMessage = resultData.Result.StatusString }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                return Json(new { success = false, errorMessage = System.Web.Helpers.Resources.General_error });
            }
        }
    }
}
