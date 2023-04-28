<template>
    <div class="row">
        <div class="col-4">
            <div class="list-group">
                <!-- 先把active class刪掉，再加上router-link -->
                <router-link to="/newpage/a" class="list-group-item list-group-item-action" aria-current="true">
                    元件一
                </router-link>
                <router-link to="/newpage/b" class="list-group-item list-group-item-action" aria-current="true">
                    元件二
                </router-link>
                <router-link to="/newpage/namedView/a2b" class="list-group-item list-group-item-action" aria-current="true">
                    命名視圖 a2b
                </router-link>
                <router-link to="/newpage/namedView/c2a" class="list-group-item list-group-item-action" aria-current="true">
                    命名視圖 c2a
                </router-link>
                <router-link to="/newpage/routerNavigation" class="list-group-item list-group-item-action" aria-current="true">
                    路由導覽
                </router-link>
            </div>
        </div>
        <div class="col-8">
            <router-view></router-view>
        </div>
    </div>
</template>
