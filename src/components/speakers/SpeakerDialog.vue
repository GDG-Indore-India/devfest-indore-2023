<template>
	<!-- border: 1px solid #e0e0e0;
          border-radius: 5px; -->
	<v-dialog v-model="dialog" width="850" scrollable>
		<template v-slot:activator="{ on, attrs }">
			<div
				v-on="on"
				v-ripple
				v-bind="attrs"
				style="cursor: pointer; background: white; border-radius: 16px"
				class="text-center ma-0 fill-height"
			>
				<!-- <v-badge icon="mdi-account-group-outline" overlap bordered offset-y="25" offset-x="28" v-if="speakerData.type.includes('Networking')">
          <v-avatar size="130">
            <v-img
              :src="getImgUrl(speakerData.image)"
              :lazy-src="getImgUrl(speakerData.image)"
              :alt="speakerData.name"
            ></v-img>
          </v-avatar>
        </v-badge> -->
				<div class="heightabove">
					<v-avatar size="110">
						<v-img
							:src="getImgUrl(speakerData.image)"
							:lazy-src="getImgUrl(speakerData.image)"
							:alt="speakerData.name"
						></v-img>
					</v-avatar>
					<p class="mt-3 mb-0 google-font mb-0" style="font-size: 110%">
						{{ speakerData.name }}
					</p>
					<p class="mt-1 mb-0 google-font mt-0" style="font-size: 80%">
						{{ speakerData.company.name }}
					</p>
					<v-chip
						class="ma-2 max-width-chip"
						:color="getChipColor(speakerData.track)"
					>
						{{ speakerData.track }}
					</v-chip>
				</div>
				<!-- Socail Card -->
				<div class="height">
					<v-btn
						fab
						icon
						v-if="speakerData.social.twitter.length > 0"
						:href="speakerData.social.twitter"
						target="_blank"
						small
						rel="noreferrer"
						color="rgb(29, 161, 242)"
					>
						<v-icon>mdi-twitter</v-icon>
					</v-btn>
					<v-btn
						fab
						icon
						v-if="speakerData.social.linkedin.length > 0"
						:href="speakerData.social.linkedin"
						target="_blank"
						small
						rel="noreferrer"
						color="rgb(0, 119, 181)"
					>
						<v-icon>mdi-linkedin</v-icon>
					</v-btn>
				</div>
				<!-- Social Card -->
				<!-- <socialMediaDetails class="pl-0 ml-0" :socialInfo="speakerData.social" /> -->
			</div>
		</template>
		<v-card class="white" v-if="dialog" style="border-radius: 12px">
			<v-card-text class="pa-0">
				<v-container fluid class="py-8">
					<v-row>
						<v-col md="12" cols="12" class="px-md-10 px-3">
							<!-- Header -->
							<v-container fluid class="pa-0 ma-0">
								<v-row class="pa-0 ma-0">
									<v-col md="10" class="pa-0 ma-0">
										<v-list class="pa-0 ma-0">
											<v-list-item class="pa-0 ma-0">
												<v-list-item-avatar size="70">
													<v-img
														:src="getImgUrl(speakerData.image)"
														:lazy-src="getImgUrl(speakerData.image)"
														:alt="speakerData.name"
													></v-img>
												</v-list-item-avatar>
												<v-list-item-content>
													<v-list-item-title
														class="google-font mb-0"
														style="font-size: 200%; font-weight: 600"
														>{{ speakerData.name }}</v-list-item-title
													>
													<v-list-item-subtitle
														class="google-font mb-0"
														style="font-size: 110%; color: black"
														>{{
															speakerData.company.designation
														}}</v-list-item-subtitle
													>
													<v-list-item-subtitle
														v-if="speakerData.company.name"
														class="google-font mb-0"
														style="font-size: 110%; color: black"
													>
														{{ speakerData.company.name }}</v-list-item-subtitle
													>
												</v-list-item-content>
											</v-list-item>
										</v-list>
									</v-col>
									<v-col md="2" class="text-right d-none d-sm-block">
										<v-tooltip bottom>
											<template v-slot:activator="{ on, attrs }">
												<v-btn
													v-bind="attrs"
													v-on="on"
													fab
													text
													:to="'/speakers/' + speakerData.id"
													target="_blank"
													><v-icon>mdi-open-in-new</v-icon></v-btn
												>
											</template>
											<span>View in New Tab</span>
										</v-tooltip>
									</v-col>
								</v-row>
							</v-container>
						</v-col>
					</v-row>
					<v-row class="pt-0 mt-n1">
						<v-col md="12" cols="12" class="px-md-10 px-5">
							<!-- <p class="google-font mb-0" style="font-size: 110%"><b>Bio</b></p> -->
							<p class="google-font mt-4" style="font-size: 120%; color: black">
								{{ speakerData.bio }}
							</p>

							<socialMediaDetails
								class="pl-0 ml-0 mb-2"
								:socialInfo="speakerData.social"
							/>

							<!-- <p
                class="my-0 google-font mt-10"
                v-if="speakerData.sessionId.length > 0"
                style="font-size: 120%"
              >
                <span v-if="speakerData.sessionId.length == 1">Session</span>
                <span v-else>Sessions</span>
              </p> -->

							<SpeakerSessionsCard
								:small="true"
								:speakerData="speakerData"
								:sessionDetails="sessionDetails"
							/>
						</v-col>
					</v-row>
				</v-container>
			</v-card-text>

			<!-- <v-divider></v-divider> -->

			<v-card-actions class="white mb-4 mr-4">
				<v-spacer></v-spacer>
				<v-btn
					aria-label="close"
					class="px-10 py-4 rounded-xl font-weight-bold"
					style="background-color: #4caf50; color: white"
					text
					@click="dialog = false"
					>Close</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<script>
import socialMediaDetails from "@/components/common/PersonSocialInfo";
import SpeakerSessionsCard from "@/components/speakers/SpeakerSessionCards.vue";
export default {
	name: "SpeakerDetails",
	components: {
		socialMediaDetails,
		SpeakerSessionsCard,
	},
	props: ["speakerData", "sessionDetails"],
	data: () => ({
		dialog: false,
	}),
	methods: {
		getChipColor(track) {
			switch (track) {
				case "WEB":
					return "red";
				case "Cloud":
					return "green";
				case "ML":
					return "yellow";
				default:
					return "primary";
			}
		},
	},
};
</script>

<style>
.height {
	height: 20% !important;
	display: flex;
	justify-content: center;
	align-items: center;
}
.heightabove {
	height: 80% !important;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.max-width-chip {
	max-width: 50%;
	width: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 500;
}
</style>
