import { Issue as PrismaIssue, User } from "@prisma/client";
import { Grid, Box, Text } from "@radix-ui/themes";
import IssueCard from "./IssueCard";

type Issue = PrismaIssue & {
  assignedToUser: User | null;
};

type BoardLayoutProps = {
  openIssues: Issue[];
  inProgressIssues: Issue[];
  closedIssues: Issue[];
};

const BoardLayout: React.FC<BoardLayoutProps> = ({ openIssues, inProgressIssues, closedIssues }) => {
  return (
    <Grid columns={{ initial: "1", sm: "3" }} gap="5">
      <Box>
        <Text>OPEN</Text>
        {openIssues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </Box>
      <Box>
        <Text>IN PROGRESS</Text>
        {inProgressIssues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </Box>
      <Box>
        <Text>CLOSED</Text>
        {closedIssues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </Box>
    </Grid>
  )
}

export default BoardLayout