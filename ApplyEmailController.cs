using System;
using System.Collections.Generic;
using System.Web.Http;


namespace Dev.Web.Controllers.Api.Jobs.JobPostings
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
                    Name = "Dev Job Employer"
                };

               var list = new List<MessageAddress>
                    {
                        msgAdd
                    };

                eml.To = list;
                eml.FromAddress = "Dev@mailinator.com";
                eml.FromName = resp.Items[0].Firstname + " " + resp.Items[0].LastName;
                eml.Subject = "Job Interest";
                eml.PlainTextBody = "Hello, this is a message from Dev. "+ (eml.FromName) + " is interested in the "+(resp.Items[0].JobTitle)+" position that you have posted. " +
                    "To get back to "+(eml.FromName)+" about this position you can email "+(resp.Items[0].Firstname)+" at " +(resp.Items[0].Email)+".";

                _emailMessenger.SendMail(eml);

                var emlConfirmation = new Email();

                var msgAddConfirmation = new MessageAddress
                {
                    Email = resp.Items[0].Email,
                    Name = "Dev"
                };

                var listConfiramtion = new List<MessageAddress>
                    {
                        msgAddConfirmation
                    };

                emlConfirmation.To = listConfiramtion;
                emlConfirmation.FromAddress = "Dev@mailinator.com";
                emlConfirmation.FromName = resp.Items[0].Firstname + " " + resp.Items[0].LastName;
                emlConfirmation.Subject = "Job Interest Confirmation";
                emlConfirmation.PlainTextBody = "Hello " + (emlConfirmation.FromName) + ", this is a message from Dev. You have succesfully contacted the employer regarding the position of " + (resp.Items[0].JobTitle) + ". " +
                    "The employer will contact you by email. DO NOT contact Dev regarding this position.";

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
        
