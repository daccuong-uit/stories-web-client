import { Component } from '@angular/core';
import { PageShellComponent, SidebarMenuItem, GLOBAL_MENU_ITEMS } from '@fe/ui';
import { StoriesComponent } from '../stories/stories.component';
import { StoriesRightSidebarComponent } from '../stories-right-sidebar/stories-right-sidebar.component';

@Component({
  standalone: true,
  selector: 'fe-stories-shell',
  imports: [PageShellComponent, StoriesComponent, StoriesRightSidebarComponent],
  template: `
    <ui-page-shell [menuItems]="menuItems" brandLink="/stories">
      <fe-stories slot="main"></fe-stories>
      <fe-stories-right-sidebar slot="rightbar"></fe-stories-right-sidebar>
    </ui-page-shell>
  `,
})
export class StoriesShellComponent {
  menuItems: SidebarMenuItem[] = GLOBAL_MENU_ITEMS;
}
