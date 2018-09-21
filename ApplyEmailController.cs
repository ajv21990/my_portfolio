using System;
using System.Collections.Generic;
using System.Web.Http;

using Eleveight.Models.Domain.Job_Postings;
using Eleveight.Models.Domain.Tools;
using Eleveight.Models.Requests.App;
using Eleveight.Models.Requests.JobPostings;
using Eleveight.Models.Responses;
using Eleveight.Services;
using Eleveight.Services.App;
using Eleveight.Services.Interfaces;
using Eleveight.Services.Tools;


namespace Eleveight.Web.Controllers.Api.Jobs.JobPostings
{
    [RoutePrefix("api/user/jobapply")]
    public class ApplyEmailController : ApiController
    {
        private IAppLogService _appLogService;
        private IEmailTemplateService _emailTemplateService;
        private IEmailMessenger _emailMessenger;
        IJobPostingsService _jobPostingsService;
        IUserService _userService;


        public ApplyEmailController(IJobPostingsService jobPostingsService, IAppLogService appLogService, IEmailTemplateService emailTemplateService, IEmailMessenger emailMessenger, IUserService userService)
        {
            _jobPostingsService = jobPostingsService;
            _appLogService = appLogService;
            _emailMessenger = emailMessenger;
            _emailTemplateService = emailTemplateService;
            _userService = userService;

        }

        [Route("{id:int}/{jobId:int}"), HttpGet]
        public IHttpActionResult GetEmailInfo(int id, int jobId)
        {
            try
            {
                int userId = _userService.GetCurrentUserId();
                var resp = new ItemsResponse<ApplyJobEmail>();
                resp.Items = _jobPostingsService.GetEmailInfo(id, jobId);

                var eml = new Email();

                var msgAdd = new MessageAddress
                {
                    Email = resp.Items[0].ContactEmail,
                    Name = "Eleveight Job Employer"
                };

               var list = new List<MessageAddress>
                    {
                        msgAdd
                    };

                eml.To = list;
                eml.FromAddress = "Eleveight@mailinator.com";
                eml.FromName = resp.Items[0].Firstname + " " + resp.Items[0].LastName;
                eml.Subject = "Job Interest";
                eml.PlainTextBody = "Hello, this is a message from Eleveight. "+ (eml.FromName) + " is interested in the "+(resp.Items[0].JobTitle)+" position that you have posted. " +
                    "To get back to "+(eml.FromName)+" about this position you can email "+(resp.Items[0].Firstname)+" at " +(resp.Items[0].Email)+".";

                _emailMessenger.SendMail(eml);

                var emlConfirmation = new Email();

                var msgAddConfirmation = new MessageAddress
                {
                    Email = resp.Items[0].Email,
                    Name = "Eleveight"
                };

                var listConfiramtion = new List<MessageAddress>
                    {
                        msgAddConfirmation
                    };

                emlConfirmation.To = listConfiramtion;
                emlConfirmation.FromAddress = "Eleveight@mailinator.com";
                emlConfirmation.FromName = resp.Items[0].Firstname + " " + resp.Items[0].LastName;
                emlConfirmation.Subject = "Job Interest Confirmation";
                emlConfirmation.PlainTextBody = "Hello " + (emlConfirmation.FromName) + ", this is a message from Eleveight. You have succesfully contacted the employer regarding the position of " + (resp.Items[0].JobTitle) + ". " +
                    "The employer will contact you by email. DO NOT contact Eleveight regarding this position.";

                _emailMessenger.SendMail(emlConfirmation);


                return Ok(resp);
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            };
        }
        [HttpPost]
        [Route]
        public IHttpActionResult Insert(JobsAppliedForRequest model)
        {
            try
            {
                if (!ModelState.IsValid) return BadRequest(ModelState);
                var resp = new ItemResponse<int>
                {
                    Item = _jobPostingsService.Insert(model)
                };
                return Ok(resp);
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            }

        }
        [HttpGet]
        [Route("{id:int}")]
        public IHttpActionResult SelectByUserId(int id)
        {
            try
            {
                var resp = new ItemsResponse<JobsAppliedForDomain>();
                resp.Items = _jobPostingsService.SelectByUserId(id);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            };
        }
        [HttpGet]
        [Route("20/{id:int}")]
        public IHttpActionResult SelectByUserId_20Miles(int id)
        {
            try
            {
                var resp = new ItemsResponse<JobsAppliedForDomain>();
                resp.Items = _jobPostingsService.SelectByUserId_20Miles(id);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            };
        }
        [HttpGet]
        [Route("10/{id:int}")]
        public IHttpActionResult SelectByUserId_10Miles(int id)
        {
            try
            {
                var resp = new ItemsResponse<JobsAppliedForDomain>();
                resp.Items = _jobPostingsService.SelectByUserId_10Miles(id);
                return Ok(resp);
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            };
        }
        [HttpDelete]
        [Route("{id:int}")]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                _jobPostingsService.DeleteJobAppliedFor(id);
                return Ok(new SuccessResponse());
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            };

        }
        [HttpDelete]
        [Route("job/{jobId:int}")]
        public IHttpActionResult JobFilled(int jobId)
        {
            try
            {
                _jobPostingsService.jobFilledDelete(jobId);
                return Ok(new SuccessResponse());
            }
            catch (Exception ex)
            {
                int currentUser = _userService.GetCurrentUserId();
                _appLogService.Insert(new AppLogAddRequest
                {
                    AppLogTypeId = 1,
                    Message = ex.Message,
                    StackTrace = ex.StackTrace,
                    Title = "Error in " + GetType().Name + " " + System.Reflection.MethodBase.GetCurrentMethod().Name,
                    UserBaseId = currentUser
                });

                return BadRequest(ex.Message);
            };

        }
    }
    
}