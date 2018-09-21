-- ================================================
-- Template generated from Template Explorer using:
-- Create Procedure (New Menu).SQL
--
-- Use the Specify Values for Template Parameters 
-- command (Ctrl-Shift-M) to fill in the parameter 
-- values below.
--
-- This block of comments will not be included in
-- the definition of the procedure.
-- ================================================
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		AJ Villan
-- Create date: 8/30/18
-- Description:	Job Range within 10 miles
-- =============================================
ALTER PROCEDURE [dbo].[JobsApplied_ById_10Miles]  
	-- Add the parameters for the stored procedure here
	@userBaseId INT

AS
/*
	DECLARE
		@userbaseId INT = 23,
		@UserLocPoint geography

	SELECT @UserLocPoint = z.geographyPoint FROM UserAddress ua
		join [Address] a on a.Id = ua.AddressId
		join ZipCodeData z on z.Zip = a.PostalCode
		
	WHERE ua.UserBaseId=@userBaseId

	SELECT jp.Id,afj.userBaseId, afj.AppliedId,afj.appliedDate, jp.JobTitle,jp.Requirements,jp.Details,jp.ContactName,jp.ContactName,jp.ContactPhone,jp.ContactEmail,jp.ZipCode
	FROM JobPosting jp
		 join ZipCodeData z on z.Zip = jp.zipCode
		 left join AppliedForJob afj on afj.jobId = jp.Id
	WHERE @UserLocPoint.STDistance(z.geographyPoint) / Convert(float, 1609.344) <= 10
*/
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

    -- Insert statements for procedure here
		DECLARE @UserLocPoint geography 


	SELECT @UserLocPoint = z.geographyPoint FROM UserAddress ua
		join [Address] a on a.Id = ua.AddressId
		join ZipCodeData z on z.Zip = a.PostalCode
		
	WHERE ua.UserBaseId=@userBaseId

	SELECT jp.Id,afj.userBaseId, afj.AppliedId,afj.appliedDate, jp.JobTitle,jp.Requirements,jp.Details,jp.ContactName,jp.ContactName,jp.ContactPhone,jp.ContactEmail,jp.ZipCode
	FROM JobPosting jp
		 join ZipCodeData z on z.Zip = jp.zipCode
		 left join AppliedForJob afj on afj.jobId = jp.Id
		 
	WHERE @UserLocPoint.STDistance(z.geographyPoint) / Convert(float, 1609.344) <= 10
END
GO
