using System.DirectoryServices.AccountManagement;

namespace ADTest.net
{
    class Program
    {
        static void Main(string[] args)
        {
            string domainName = "ra-int";
            string userName = "xxxx3";
            string password = "xxxxxx";
            using (PrincipalContext pc = new PrincipalContext(ContextType.Domain, domainName, userName, password))
            {
                bool result = pc.ValidateCredentials(userName, password, ContextOptions.Negotiate);

                UserPrincipal user = UserPrincipal.FindByIdentity(pc, userName);
            }
        }
    }
}
