import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  NewMember: string = '';
  Members: string[] = [];
  Error: string = '';
  TeamNumber: number | "";
  teams: string[][] = [];

  onMemberName(member) {
    if (!member) {
      this.Error = "please add a member"
    } else {
      this.NewMember = member;
      this.Error = '';
    }
  }
  onAddNew() {
    if (!this.NewMember) {
      this.Error = "please add a member"
    } else {
      this.Members.push(this.NewMember);
      this.NewMember = "";
      this.Error = '';
    }
  }
  onTeamNumberInput(value: string) {
    this.TeamNumber = Number(value);
  }

  onGenerateTeam() {
    if (!this.TeamNumber || this.TeamNumber <= 0) {
      this.Error = "Invalid Number Of Team";
      return;
    }
    if (this.Members.length < this.TeamNumber) {
      this.Error = "Not Enough Members";
      return;
    }
    this.Error = "";

    const allMembers = [...this.Members];
    while (allMembers.length) {
      for (let i = 0; i < this.TeamNumber; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    this.Members = [];
    this.TeamNumber = "";
    console.log(this.teams);
  }
}

